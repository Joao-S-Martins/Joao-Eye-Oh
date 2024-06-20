import { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const useAspectRatio = (ref: React.RefObject<HTMLElement | null>) => {
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);

  useEffect(() => {
    const calculateAspectRatio = () => {
      if (ExecutionEnvironment.canUseDOM && ref.current) {
        const { width } = ref.current.getBoundingClientRect();
        setAspectRatio(width / window.innerHeight);
      }
    };
    calculateAspectRatio();

    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('resize', calculateAspectRatio);
      return () => {
        window.removeEventListener('resize', calculateAspectRatio);
      };
    }
  }, [ref]);

  return aspectRatio;
};

export default useAspectRatio;
