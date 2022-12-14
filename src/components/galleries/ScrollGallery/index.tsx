import {addScrollListener, getAspectRatio, getClientHeight, showFullImage} from '@site/src/clientUtils';
import React, {Component} from 'react'
import GalleryCaption, {ENUMS as CAP_ENUMS} from '@site/src/components/galleries/GalleryCaption';
import GalleryImage, {ENUMS} from '@site/src/components/galleries/GalleryImage';

import styles from './styles.module.scss';

export class ScrollGallery extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.scrollGallery}>
        {this.props.children}
        <div className={styles.scrollSpace} /> {/* Doubled scrollSpace for the last child */}
      </div>
    );
  }
}

export class ScrollImage extends GalleryImage {
  constructor(props) {
    super(props);
    this.state = {
      aspect: null,
      inView: false,
      isFirst: false,
      top: NaN
    }
  }

  onClick = event => {
    const img = event.target;
    let src = img.src;
    if (img.style.opacity < 0) {
      previousElementSibling 
    }
    showFullImage.open(src);
  }

  onScroll = (el) => {
    const range = getClientHeight();
    const sibling = this.figure.nextElementSibling.getBoundingClientRect();
    const travel = range - sibling.top;
    if (!this.state.isFirst) { // Skip the opacity change if this if the first image in the gallery
      const opac = `${Math.max(Math.min(travel / 100, 1), 0)}`;
      this.figure.style.opacity = opac;
      if (opac !== '1') {
        this.figure.style['pointer-events'] = 'none';
      } else {
        this.figure.style['pointer-events'] = 'auto';
      }
    }
    const size = Math.max(Math.min(travel / 50 + 100, 110), 100);
    this.figure.style.backgroundSize = this.state.aspect > 1 ? `${size}%` : `auto ${size}%`;
  }

  handleResize = () => {
    const parent = this.figure.parentElement;
    const aspect = getAspectRatio(parent);
    this.setState({aspect});
    this.onScroll();
  }

  componentDidMount(): void {
    const parent = this.figure.parentElement;
    const aspect = getAspectRatio(parent);
    const isFirst = parent.firstChild === this.figure;
    const resizeObserver = new ResizeObserver(this.handleResize);
    resizeObserver.observe(parent);
    addScrollListener(this.onScroll);
    this.setState({aspect, isFirst});
  }

  render() {
    return (
      <>
        <GalleryImage {...this.props} ref={el => this.figure = el ? el.figure : null} variant={ENUMS.VARIANTS.FILL} />
        { !!this.props.children ?
          <figcaption>{this.props.children}</figcaption> : ''
        }
      </>
    )
  }
}

export class ScrollCaption extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {position = CAP_ENUMS.POSITIONS.LEFT, variant = CAP_ENUMS.VARIANTS.ROUNDED} = this.props;
    return (
      <GalleryCaption
        position={position}
        variant={variant}>
          {this.props.children}
      </GalleryCaption>
    );
  }
}
