import {ORIENTATIONS, VARIANTS} from './enums';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

import styles from './styles.module.scss';
import {showFullImage} from '@site/src/clientUtils';

interface GalleryImageProps {
  alt?: string;
  src: any;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const GalleryImage = forwardRef<HTMLElement, GalleryImageProps>((props, ref) => {
  const { alt, src, variant = VARIANTS.INLINE } = props;
  const isSet = !!src.src;
  const [state, setState] = useState({
    imgH: 0,
    imgW: 0,
    isSet,
    orientation: '',
    url: isSet ? src.src.images[src.src.images.length - 1].path : src,
    zoom: 100
  });

  useEffect(() => {
  }, [ref?.current]);

  const getOrientation = (w, h) => {
    switch (true) {
      case !!state.orientation:
        return state.orientation;
      case (w > h):
        return ORIENTATIONS.LANDSCAPE;
      case (w < h):
        return ORIENTATIONS.PORTRAIT;
      default:
        return ORIENTATIONS.SQUARE;
    }
  }

  const onClick = event => props.onClick ? props.onClick(event) : showFullImage(state.url);

  const onLoad = ({target}) => {
    const {naturalHeight: imgH, currentSrc, naturalWidth: imgW} = target;
    setState(prevState => ({...prevState, imgH, imgW, orientation: getOrientation(imgW, imgH), url: currentSrc}));
  };

  let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
  if (variant.includes('left') || variant.includes('right')) {
    className += (state.orientation.charAt(0).toUpperCase() + state.orientation.slice(1));
  }

  const testSrc = !state.isSet ? src : src.src.src;
  const isVid = testSrc.includes('.webm', testSrc.length -5)

  return (
    <figure
      className={styles[`figure${className}`]}
      ref={ref}
      onClick={onClick}
      style={{backgroundImage: `url(${state.url})`}}>
      {isVid ?
        <video autoPlay className={styles[`vid${className}`]} loop muted preload src={src} /> :
        state.isSet ?
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
