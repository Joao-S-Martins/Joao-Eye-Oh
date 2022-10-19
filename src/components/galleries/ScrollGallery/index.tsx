import PropTypes from 'prop-types'
import React, {Component, ReactDOM} from 'react'
import GalleryCaption, {ENUMS as CAP_ENUMS} from '../GalleryCaption';
import GalleryImage, {ENUMS} from '../GalleryImage';

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
    window.open(src);
  }

  onScroll = (el) => {
    const range = document.documentElement.clientHeight;
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
    const aspect = parent.getBoundingClientRect().width / window.innerHeight;
    this.setState({aspect});
    this.onScroll();
  }

  componentDidMount(): void {
    const parent = this.figure.parentElement;
    const aspect = parent.getBoundingClientRect().width / window.innerHeight;
    const isFirst = parent.firstChild === this.figure;
    const resizeObserver = new ResizeObserver(this.handleResize);
    resizeObserver.observe(parent);
    window.addEventListener('scroll', this.onScroll); // TODO (joao) Centralize the scroll listener calls and debounce from ScrollGallery
    this.setState({aspect, isFirst});
  }

  render() {
    return (
      <>
        <GalleryImage {...this.props} ref={el => this.figure = el ? el.figure : null} variant={ENUMS.VARIANTS.FILL} />
        <figcaption>{this.props.children}</figcaption>
        <div ref={el => this.space = el} className={styles.scrollSpace} />
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
