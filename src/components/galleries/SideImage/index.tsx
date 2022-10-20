import {VARIANTS} from './enums';
import React, {Component} from 'react'

import styles from './styles.module.scss';
import { showFullImage } from '@site/src/clientUtils';

export default class SideImage extends Component {
  constructor(props) {
    super(props);
  }

  onClick = event => this.props.onClick ? this.props.onClick(event) : this.showFull();

  showFull = () => {
    showFullImage.open(this.props.src);
  }

  renderContent(variant) {
    let className = `content${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    return (
      <figcaption className={styles[className]}>
        {this.props.children}
      </figcaption>
    );
  }

  render() {
    const {alt, src, variant = VARIANTS.LEFT} = this.props;
    const className = `wrap${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    return (
      <figure className={styles[className]}>
        {src.includes('.webm', src.length -5) ?
          <video autoPlay className={styles.vid} loop muted preload onClick={event => this.onClick(event)} src={src} /> :
          <img alt={alt} className={styles.img} onClick={event => this.onClick(event)} src={src} />
        }
        <figcaption className={styles.content}>
          {this.props.children}
        </figcaption>
      </figure>
    );
  }
}

export const ENUMS = {
  VARIANTS
};
