import {VARIANTS} from './enums';
import React, {Component} from 'react'

import styles from './styles.module.scss';
import {showFullImage} from '@site/src/clientUtils';

export default class SideImage extends Component {
  constructor(props) {
    super(props);
    const isSet = !!props.src.src;
    this.state = {
      isSet,
      url: isSet ? props.src.preSrc : props.src,
    };
  }

  onClick = event => this.props.onClick ? this.props.onClick(event) : this.showFull();

  showFull = () => {
    showFullImage(this.state.url);
  }

  renderContent(variant) {
    let className = `content${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    return (
      <figcaption className={styles[className]}>
        {this.props.children}
      </figcaption>
    );
  }

  onLoad({target}) {
    this.setState({url: target.currentSrc});
  }

  render() {
    const {alt, src, variant = VARIANTS.LEFT} = this.props;
    const className = `wrap${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    const testSrc = !this.state.isSet ? src : src.src.src;
    const isVid = testSrc.includes('.webm', testSrc.length -5)
    return (
      <figure className={styles[className]}>
        {isVid ?
          <video autoPlay className={styles.vid} loop muted preload onClick={event => this.onClick(event)} src={src} /> :
          this.state.isSet ?
            <img alt={alt} className={styles.img} onClick={event => this.onClick(event)} onLoad={event => this.onLoad(event)} srcSet={src.src.srcSet} /> :
            <img alt={alt} className={styles.img} onClick={event => this.onClick(event)} onLoad={event => this.onLoad(event)} src={src} />
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
