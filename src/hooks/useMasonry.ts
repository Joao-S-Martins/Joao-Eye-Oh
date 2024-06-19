import { useEffect, RefObject } from 'react';
import Masonry from 'masonry-layout';

function useMasonry(masonRef: RefObject<HTMLElement>, masonryOpts: Masonry.Options) {
  useEffect(() => {
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
