import { lazyLoad } from 'utils/loadable';

export const Graphs = lazyLoad(
  () => import('./index'),
  module => module.Graphs,
);
