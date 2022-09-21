import clsx from 'clsx';
import styles from './styles.module.scss';
import {VARIANTS} from './enums';
import React, {Component} from 'react'

export default function GalleryCaption(props) {
  const {children, position = 'middle center', variant} = props;
  let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

  return (
    <div className={clsx(position.split(' ').map(val => styles[`position${val.charAt(0).toUpperCase() + val.slice(1)}`]))}>
      <figcaption data-test={variant} className={styles[`caption${className}`]}>
        {children}
      </figcaption>
    </div>
  );
}

export const ENUMS = {
  VARIANTS
};
