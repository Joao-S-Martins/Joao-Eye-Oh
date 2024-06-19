import React, {ReactNode, useEffect, useRef} from 'react';
import useMasonry from '@site/src/hooks/useMasonry';

import styles from './styles.module.scss';

const masonryOpts = {
  itemSelector: `.${styles.gridItem}`,
  columnWidth: `.${styles.gridSizer}`,
  gutter: `.${styles.gutterSizer}`,
  percentPosition: true
};

export default function MasonryGallery(props) {
  const masonRef = useRef(null);
  useMasonry(masonRef, masonryOpts);

  const wrapChild = (img: ReactNode, i: number) => {
    return (
      <div className={`${styles.gridItem}${i===0 ? ' ' + styles.gridSizer : ''}`} key={i}>
        {img}
      </div>
    );
  }

  return (
    <div ref={masonRef} style={{overflow: 'hidden'}}>
      {props.children.map(wrapChild)}
      <div className={styles.gutterSizer} />
    </div>
  );
}
