import {ORIENTATIONS, VARIANTS} from './enums';
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import styles from './styles.module.scss';
import { showFullImage } from '@site/src/clientUtils';

export default class GalleryImage extends Component {
  // static defaultProps = {
  //   src: '',
  //   width: '',
  //   height: '',
  //   id: '',
  //   className: '',
  // }
  constructor(props) {
    super(props);
    this.state = {
      imgH: 0,
      imgW: 0,
      orientation: '',
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

  onClick = event => this.props.onClick ? this.props.onClick(event) : showFullImage(this.props.src);

  render() {
    const {alt, src, variant = VARIANTS.INLINE} = this.props;
    const orientation = this.state.orientation || ORIENTATIONS.LANDSCAPE;

    const onLoad = ({target}) => {
      const {naturalHeight: imgH, src, naturalWidth: imgW} = target;
      this.setState({imgH, imgW, orientation: this.getOrientation(imgW, imgH), src});
    };

    let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;
    if (variant.includes('left') || variant.includes('right')) {
      className += (orientation.charAt(0).toUpperCase() + orientation.slice(1));
    }

    return (
      <figure
        className={styles[`figure${className}`]}
        ref={el => this.figure = el}
        onClick={event => this.onClick(event)}
        style={{backgroundImage: `url(${src})`}}>
        {src.includes('.webm', src.length -5) ?
          <video autoPlay className={styles[`vid${className}`]} loop muted preload src={src} /> :
          <img alt={alt} className={styles[`img${className}`]} data-test={`${className}, ${this.state.imgW}, ${this.state.imgH}, ${this.state.orientation}`} onLoad={onLoad} src={src} />
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

GalleryImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS))
}
