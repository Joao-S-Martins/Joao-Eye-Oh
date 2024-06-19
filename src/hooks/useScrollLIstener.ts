import { useEffect } from 'react';
import { debounce } from 'lodash';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const useScrollListener = (fn: () => void, delay = 200) => { // 200ms default delay
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const debouncedFn = debounce(fn, delay);
      window.addEventListener('scroll', debouncedFn);

      return () => {
        window.removeEventListener('scroll', debouncedFn);
      };
    }
  }, [fn, delay]);
};

export default useScrollListener;
