import {VARIANTS} from './enums';
import React, {useState} from 'react'

import styles from './styles.module.scss';
import {showFullImage} from '@site/src/clientUtils';

export type SideImageProps = {
  alt?: string;
  src: unknown; // TODO (john) Fix this type
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement | HTMLVideoElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export default function SideImage(props: SideImageProps) {
  console.log('src', props.src);
  const isSet = !!props.src.src;
  const [url, setUrl] = useState(isSet ? props.src.src : props.src);
  const {alt, src, variant = VARIANTS.LEFT} = props;
  const className = `wrap${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
  const testSrc = !isSet ? src : src.src.src;
  const isVid = testSrc.includes('.webm', testSrc.length -5)

  const onClick = (event: React.MouseEvent<HTMLImageElement | HTMLVideoElement, MouseEvent>) => props.onClick ? props.onClick(event) : showFull();

  const showFull = () => {
    showFullImage(url);
  }

  // const renderContent = (variant) => {
  //   const className = `content${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
  //   return (
  //     <figcaption className={styles[className]}>
  //       {props.children}
  //     </figcaption>
  //   );
  // }

  const onLoad = ({ target }) => {
    setUrl(target.currentSrc);
  }

  return (
    <figure className={styles[className]}>
      {isVid ?
        <video autoPlay className={styles.vid} loop muted preload="true" onClick={ onClick } src={src} /> :
        isSet ?
          <img alt={alt} className={styles.img} onClick={ onClick } onLoad={ onLoad } srcSet={src.src.srcSet} /> :
          <img alt={alt} className={styles.img} onClick={ onClick } onLoad={ onLoad } src={src} />
      }
      <figcaption className={styles.content}>
        {props.children}
      </figcaption>
    </figure>
  );
}

export const ENUMS = {
  VARIANTS
};
