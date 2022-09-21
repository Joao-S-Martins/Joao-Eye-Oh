export const VARIANTS = {
  FILL: 'fill', // Fills viewport without exceeding it, results in cropping
  FULL: 'full', // Full width
  INLINE: 'inline', // Normal
  LEFT: 'left', // Image fills left side w/ cropping, caption is scrollable on the right side
  RIGHT: 'right', // Image fills right side w/ cropping, caption is scrollable on the left side
  SCROLL: 'scroll', // Like window but using the full viewport height, bonus if images zoom-fade out to next image
  SNAP: 'snap', // Like fill but with the caption displayed in full-width box
  WINDOW: 'window' // Like fill but the image is fixed and is only revealed by a percentage of viewport height while scrolling
};

export const ORIENTATIONS = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
  SQUARE: 'square'
};
