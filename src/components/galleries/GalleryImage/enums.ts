export const VARIANTS = {
  // Fills viewport without exceeding it, results in cropping
  FILL: 'fill',
  // Full width
  FULL: 'full',
  // Normal
  INLINE: 'inline',
  // Image fills left side w/ cropping, caption is scrollable on the right side
  LEFT: 'left',
  // Image fills right side w/ cropping, caption is scrollable on the left side
  RIGHT: 'right',
  // Like window but using the full viewport height, bonus if images zoom-fade out to next image
  SCROLL: 'scroll',
  // Like fill but with the caption displayed in full-width box
  SNAP: 'snap',
  // Like fill but the image is fixed and is only revealed by a percentage of
  //viewport height while scrolling
  WINDOW: 'window'
};

export const ORIENTATIONS = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
  SQUARE: 'square'
};
