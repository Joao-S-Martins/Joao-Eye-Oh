import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function addScrollListener(fn) {
  return ExecutionEnvironment.canUseEventListeners ? window.addEventListener('scroll', fn) : false; // TODO (joao) Create a singleton to debounce scroll actions. Maybe use react-scroll-listener
}

export function getAspectRatio(parent) {
  return ExecutionEnvironment.canUseDOM ? parent.getBoundingClientRect().width / window.innerHeight : 4/3;
}

export function getClientHeight() {
  return ExecutionEnvironment.canUseDOM ? document.documentElement.clientHeight : 600;
}

export function showFullImage(url) {
  return ExecutionEnvironment.canUseDOM ? window.open(url) : false;
}
