import Masonry from 'masonry-layout';
import React, {Component, useLayoutEffect} from 'react';

import styles from './styles.module.scss';

export default function MasonryGallery(props) {
  let ref = React.createRef();

  useLayoutEffect(() => {
    const opts = {
      itemSelector: `.${styles.gridItem}`,
      columnWidth: `.${styles.gridSizer}`,
      gutter: `.${styles.gutterSizer}`,
      percentPosition: true
    };
    const msnry = new Masonry(ref, opts);
    const resizeObserver = new ResizeObserver(() => {msnry.layout()});
    resizeObserver.observe(ref.parentElement);
  });

  const showFull = url => window.open(url);

  const wrap = (img, i) => {
    return (
      <div class={`${styles.gridItem}${i===0 ? ' ' + styles.gridSizer : ''}`} key={i} onClick={() => showFull(img.props.src)}>
        {img}
      </div>
    );
  }

  return (
    <div ref={el => ref = el} style={{overflow: 'hidden'}}>
      {props.children.map(wrap)}
      <div class={styles.gutterSizer} />
    </div>
  );
}
