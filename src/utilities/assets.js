import Treemall from '../assets/images/treemall.jpg';
import TreemallDark from '../assets/images/tremall_dark.jpg';
import * as obp from 'object-path';

const asset = {
  image: {
    treemall: Treemall,
    treemall_dark: TreemallDark
  }
};

export const getAssetsPath = (type, name) => {
  const path = obp.get(asset, `${type}.${name}`);
  if (!path) {
    throw new Error('error/invalid-asset-param');
  }
  return path;
}

