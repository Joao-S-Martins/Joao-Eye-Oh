import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function getAspectRatio(parent) {
  return ExecutionEnvironment.canUseDOM ? parent.getBoundingClientRect().width / window.innerHeight : 4/3;
}

export function addScrollListener(fn) {
  return ExecutionEnvironment.canUseDOM && window.addEventListener('scroll', fn); // TODO (joao) Create a singleton to debounce scroll actions. Maybe use react-scroll-listener
}

export function showFullImage(url) {
  return ExecutionEnvironment.canUseDOM && window.open(url);
}
