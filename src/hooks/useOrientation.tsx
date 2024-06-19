import { ORIENTATIONS } from '../components/galleries/GalleryImage/enums';
import { useReducer } from 'react';

function orientationReducer(_state, { naturalWidth, naturalHeight }: HTMLImageElement) {
  switch (true) {
    case (naturalWidth > naturalHeight):
      return ORIENTATIONS.LANDSCAPE;
    case (naturalWidth < naturalHeight):
      return ORIENTATIONS.PORTRAIT;
    default:
      return ORIENTATIONS.SQUARE;
  }
}

export function useOrientation(): [string, React.Dispatch<HTMLImageElement>]{
  const [orientation, dispatchOrientation] = useReducer(orientationReducer, null);
  return [orientation, dispatchOrientation];
}
