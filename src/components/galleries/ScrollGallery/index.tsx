import clsx from 'clsx';
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
    // TODO (joao) Add function to children that makes image invisible until it reaches top:0, then increases opacity by 10 for every 1vh.
    // TODO (joao) Add function to children that grows background-size from 100% by 0.1% per 1vh scrolled after top:0.
    return (
      <div className={styles.scrollGallery}>
        {/* {this.props.children.map(child => {
          return (
            <>
              {child}
              <div className={styles.scrollSpace} />
            </>)
        })} */}
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
      top: NaN,
      inView: false,
      isFirst: false
    }
  }

  onScroll = (el) => {
    const range = document.documentElement.clientHeight;
    const sibling = this.figure.nextElementSibling.getBoundingClientRect();
    const travel = range - sibling.top;
    if (!this.state.isFirst) { // Skip the opacity change if this if the first image in the gallery
      this.figure.style.opacity = `${Math.max(Math.min(travel / 100, 1), 0)}`;
    }
    this.figure.style.backgroundSize = `${Math.max(Math.min(travel / 50 + 100, 110), 100)}%`;
  }

  componentDidMount(): void {
    const isFirst = this.figure.parentElement.firstChild === this.figure;
    window.addEventListener('scroll', this.onScroll); // TODO (joao) Centralize the scroll listener calls and debounce from ScrollGallery
    this.setState({isFirst});
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
