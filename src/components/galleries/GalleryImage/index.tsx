import {ORIENTATIONS, VARIANTS} from './enums';
import React, { useState, useRef, useEffect, forwardRef, useReducer } from 'react';

import styles from './styles.module.scss';
import {showFullImage} from '@site/src/clientUtils';
import { useOrientation } from '@site/src/hooks/useOrientation';

export type GalleryImageProps = {
  alt?: string;
  src: any;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const GalleryImage = forwardRef<HTMLElement, GalleryImageProps>((props, ref) => {
  const { alt, src, variant = VARIANTS.INLINE } = props;
  const isSet = !!src.src;
  const testSrc = !isSet ? src : src.src.src;
  const isVid = testSrc.includes('.webm', testSrc.length -5)
  // url: isSet ? props.src.preSrc : props.src,
  const [url, setUrl] = useState(isSet ? src.src.images[src.src.images.length - 1].path : src); // HACK (joao) Figure out why react isn't updating with new URL
  const [orientation, dispatchOrientation] = useOrientation();

  let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
  if (variant.includes('left') || variant.includes('right')) {
    className += (orientation.charAt(0).toUpperCase() + orientation.slice(1));
  }

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => props.onClick ? props.onClick(event) : showFullImage(url);

  const onLoad = ({target}) => {
    setUrl(target.currentSrc)
    dispatchOrientation(target);
  };

  return (
    <figure
      className={styles[`figure${className}`]}
      ref={ref}
      onClick={onClick}
      style={{backgroundImage: `url(${url})`}}>
      {isVid ?
        <video autoPlay className={styles[`vid${className}`]} loop muted preload="true" src={src} /> :
        isSet ?
          <img alt={alt} className={styles[`img${className}`]} onLoad={onLoad} srcSet={src.src.srcSet} /> :
          <img alt={alt} className={styles[`img${className}`]} onLoad={onLoad} src={src} />
      }
      {props.children}
    </figure>
  );
});

export const ENUMS = {
  ORIENTATIONS,
  VARIANTS
};

export default GalleryImage;
