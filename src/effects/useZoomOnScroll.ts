import { useCallback, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useIsFirstSibling from '../hooks/useIsFirstSibling';
import useAspectRatio from '../hooks/useAspectRatio';
import useScrollListener from '../hooks/useScrollLIstener';

const useZoomOnScroll = (
  ref: React.RefObject<HTMLElement | null>,
) => {
  const aspectRatio = useAspectRatio(ref);
  const isFirst = useIsFirstSibling(ref);

  const onScroll = useCallback(() => {
    const range = window.innerHeight;
    const sibling = ref.current?.nextElementSibling?.getBoundingClientRect();
    if (!sibling) return;

    const travel = range - sibling.top;

    if (!isFirst) {
      // Opacity change if this isn't the first image in the gallery
      const opac = `${Math.max(Math.min(travel / 100, 1), 0)}`;
      ref.current!.style.opacity = opac;
      ref.current!.style['pointer-events'] = opac !== '1' ? 'none' : 'auto';
    }

    // Zoom effect while scrolling down the page
    const size = Math.max(Math.min(travel / 50 + 100, 110), 100);
    ref.current!.style.backgroundSize = aspectRatio > 1 ? `${size}%` : `auto ${size}%`;
  }, [ref.current]);

  useScrollListener(onScroll, 0);
};

export default useZoomOnScroll;
