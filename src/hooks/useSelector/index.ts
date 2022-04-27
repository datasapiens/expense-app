import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import type { RootState } from 'store/type';

// We'll use this hook typed to our state for type safety
// through out the application to select from the store
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
