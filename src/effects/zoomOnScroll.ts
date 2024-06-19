export default function zoomOnScroll (elem, aspectRatio, isFirst) {
  if (!elem) return;
  const range = window.innerHeight;
  const sibling = elem?.nextElementSibling?.getBoundingClientRect();
  if (!sibling) return;

  const travel = range - sibling.top;

  if (!isFirst) {
    // Opacity change if this isn't the first image in the gallery
    const opac = `${Math.max(Math.min(travel / 100, 1), 0)}`;
    elem!.style.opacity = opac;
    elem!.style['pointer-events'] = opac !== '1' ? 'none' : 'auto';
  }

  // Zoom effect while scrolling down the page
  console.log('!!!!!', 'elem', elem, 'aspectRatio', aspectRatio, 'travel', travel)
  const size = Math.max(Math.min(travel / 50 + 100, 110), 100);
  elem!.style.backgroundSize = aspectRatio > 1 ? `${size}%` : `auto ${size}%`;
};
