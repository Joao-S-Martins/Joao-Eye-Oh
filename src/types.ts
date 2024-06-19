// import type SrcType from '@docusaurus/plugin-ideal-image';
import type SrcImage from '@theme/IdealImage';

export type MediaSrc = {
  src: typeof SrcImage;
};

export type MediaSrcSet = {
  src: { src: { src: string } };
};

export const isMediaSrcSet = (src: MediaSrc | MediaSrcSet): src is MediaSrcSet => {
  return (src as MediaSrcSet).src !== undefined;
};
