import React, { useRef } from 'react'
import GalleryCaption, {ENUMS as CAP_ENUMS} from '@site/src/components/galleries/GalleryCaption';
import GalleryImage, {ENUMS} from '@site/src/components/galleries/GalleryImage';

import styles from './styles.module.scss';
import useZoomOnScroll from '@site/src/effects/useZoomOnScroll';

export type ScrollGalleryProps = {
  children: React.ReactNode;
}

export type ScrollCaptionProps = {
  children: React.ReactNode;
  position?: string;
  variant?: string;
}

export type ScrollImageProps = {
  children: React.ReactNode;
  src: any;
}

export function ScrollGallery({children}: ScrollGalleryProps) {
  return (
    <div className={styles.scrollGallery}>
      {children}
      {/* Doubled scrollSpace for the last child */}
      <div className={styles.scrollSpace} />
    </div>
  );
}

export function ScrollCaption(props: ScrollCaptionProps) {
  const {children, position = CAP_ENUMS.POSITIONS.LEFT, variant = CAP_ENUMS.VARIANTS.ROUNDED} = props;
  return (
    <GalleryCaption
      position={position}
      variant={variant}>
        {children}
    </GalleryCaption>
  );
}

export function ScrollImage(props: ScrollImageProps) {
  const figure = useRef<HTMLElement | null>(null);
  useZoomOnScroll(figure);

  return (
    <>
      <GalleryImage {...props} ref={figure} variant={ENUMS.VARIANTS.FILL} />
      { !!props.children ?
        <figcaption>{props.children}</figcaption> : ''
      }
    </>
  );
}
