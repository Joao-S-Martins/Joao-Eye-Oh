import React, {useLayoutEffect} from 'react';

import styles from './styles.module.scss';

export default function MasonryGallery(props) {
  let ref = React.createRef();

  useLayoutEffect(() => {
    const Masonry = require('masonry-layout');
    const opts = {
      itemSelector: `.${styles.gridItem}`,
      columnWidth: `.${styles.gridSizer}`,
      gutter: `.${styles.gutterSizer}`,
      percentPosition: true
    };
    const mason = new Masonry(ref, opts);
    const resizeObserver = new ResizeObserver(() => {mason.layout()});
    resizeObserver.observe(ref.parentElement);
  });

  const wrap = (img, i) => {
    return (
      <div class={`${styles.gridItem}${i===0 ? ' ' + styles.gridSizer : ''}`} key={i}>
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
