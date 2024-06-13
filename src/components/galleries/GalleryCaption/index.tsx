import clsx from 'clsx';
import styles from './styles.module.scss';
import {POSITIONS, VARIANTS} from './enums';
import React, {Component, useEffect, useRef, useState} from 'react'

// export default class GalleryCaption extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {height: '', width: ''};
//   }

//   componentDidMount() {
//     const {height, width} = this.caption.getBoundingClientRect();
//     this.setState({height, width});
//   }

//   render() {
//     const {children, position = `${POSITIONS.MIDDLE} ${POSITIONS.CENTER}`, variant = VARIANTS.ROUNDED} = this.props;
//     let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

//     return (
//       <div data-test={position} className={clsx(position.split(' ').map(val => styles[`position${val.charAt(0).toUpperCase() + val.slice(1)}`]))}
//         onClick={event => event.stopPropagation()}
//         style={{"--caption-height": `${this.state.height}px`, "--caption-width": `${this.state.width}px`}}>
//         <figcaption data-test={variant} className={styles[`caption${className}`]} ref={el => this.caption = el}>
//           {children}
//         </figcaption>
//       </div>
//     );
//   }
// }

export const ENUMS = {
  POSITIONS,
  VARIANTS
};

export type GalleryCaptionProps = {
  variant?: string;
  position?: string;
  children: React.ReactNode;
}

export default function GalleryCaption(props: GalleryCaptionProps) {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const caption = useRef(null);

  useEffect(() => {
    if (!caption.current) return;

    const {height, width} = caption.current.getBoundingClientRect();
    setHeight(height);
    setWidth(width);
  }, [caption.current]);

  const {children, position = `${POSITIONS.MIDDLE} ${POSITIONS.CENTER}`, variant = VARIANTS.ROUNDED} = props;
  const style = {"--caption-height": `${height}px`, "--caption-width": `${width}px`} as React.CSSProperties;
  let className = `${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

  return (
    <div data-test={position} className={clsx(position.split(' ').map(val => styles[`position${val.charAt(0).toUpperCase() + val.slice(1)}`]))}
      onClick={event => event.stopPropagation()}
      style={style}>
      <figcaption data-test={variant} className={styles[`caption${className}`]} ref={caption}>
        {children}
      </figcaption>
    </div>
  );
}
