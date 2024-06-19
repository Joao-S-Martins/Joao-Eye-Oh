import { useEffect, RefObject } from 'react';
import { Options as MasonryOptions } from 'masonry-layout';
// import Masonry from 'masonry-layout'; // Causes build failure because it requires window object

function useMasonry(masonRef: RefObject<HTMLElement>, masonryOpts: MasonryOptions) {
  useEffect(() => {
    const Masonry = require('masonry-layout');
    const mason = new Masonry(masonRef.current, masonryOpts);
    const resizeObserver = new ResizeObserver(() => {mason.layout()});
    resizeObserver.observe(masonRef?.current.parentElement);

    return () => {
      resizeObserver.disconnect();
      mason.destroy();
    }
  }, [masonRef, masonryOpts]);
}

export default useMasonry;
