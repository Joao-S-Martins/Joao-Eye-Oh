import {ORIENTATIONS, VARIANTS} from './enums';
import React, {Component} from 'react'

import styles from './styles.module.scss';
import {showFullImage} from '@site/src/clientUtils';

export default class GalleryImage extends Component {
  constructor(props) {
    super(props);
    const isSet = !!props.src.src;
    this.state = {
      imgH: 0,
      imgW: 0,
      isSet,
      orientation: '',
      url: isSet ? props.src.preSrc : props.src,
      zoom: 100
    };
  }

  getOrientation = (w, h) => {
    switch (true) {
      case !!this.state.orientation:
        return this.state.orientation;
      case (w > h):
        return ORIENTATIONS.LANDSCAPE;
      case (w < h):
        return ORIENTATIONS.PORTRAIT;
      default:
        return ORIENTATIONS.SQUARE;
    }
  }

  onClick = event => this.props.onClick ? this.props.onClick(event) : showFullImage(this.state.url);

  onLoad = ({target}) => {
    const {naturalHeight: imgH, currentSrc, naturalWidth: imgW} = target;
    this.setState({imgH, imgW, orientation: this.getOrientation(imgW, imgH), url: currentSrc});
    this.forceUpdate();
  };

  render() {
    const {alt, src, variant = VARIANTS.INLINE} = this.props;
    const orientation = this.state.orientation || ORIENTATIONS.LANDSCAPE;

    let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    if (variant.includes('left') || variant.includes('right')) {
      className += (orientation.charAt(0).toUpperCase() + orientation.slice(1));
    }

    const testSrc = !this.state.isSet ? src : src.src.src;
    const isVid = testSrc.includes('.webm', testSrc.length -5)

    return (
      <figure
        className={styles[`figure${className}`]}
        ref={el => this.figure = el}
        onClick={event => this.onClick(event)}
        style={{backgroundImage: `url(${this.state.url})`}}>
        {isVid ?
          <video autoPlay className={styles[`vid${className}`]} loop muted preload src={src} /> :
          this.state.isSet ?
            <img alt={alt} className={styles[`img${className}`]} onLoad={event => this.onLoad(event)} srcSet={src.src.srcSet} /> :
            <img alt={alt} className={styles[`img${className}`]} onLoad={event => this.onLoad(event)} src={src} />
        }
        {this.props.children}
      </figure>
    );
  }
}

export const ENUMS = {
  ORIENTATIONS,
  VARIANTS
};
