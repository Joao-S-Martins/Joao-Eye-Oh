import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function showFullImage (url: string) { // TODO Replase with a custom hook if possible
  return ExecutionEnvironment.canUseDOM ? window.open(url) : false;
}
// const onClick = useShowOnClick(url, onClick) => onClick || showFullImage(url);
