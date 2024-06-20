import { useState, useEffect } from 'react';

const useIsFirstSibling = (ref: React.RefObject<HTMLElement | null>) => {
  const [isFirst, setIsFirst] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && ref.current.parentElement) {
      setIsFirst(ref.current.parentElement.firstChild === ref.current);
    }
  }, [ref]);

  return isFirst;
};

export default useIsFirstSibling;
