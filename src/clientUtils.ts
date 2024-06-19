import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// @deprecated Use useScrollListener hook instead
export function addScrollListener(fn: () => void) {
  return ExecutionEnvironment.canUseEventListeners ? window.addEventListener('scroll', fn) : false
}

// @deprecated Use useAspectRatio hook instead
export function getAspectRatio(parent: HTMLElement | null) {
  return ExecutionEnvironment.canUseDOM ? parent?.getBoundingClientRect().width / window.innerHeight : 4/3;
}

export function getClientHeight() {
  return ExecutionEnvironment.canUseDOM ? document.documentElement.clientHeight : 600;
}

export function showFullImage(url: string) {
  return ExecutionEnvironment.canUseDOM ? window.open(url) : false;
}
