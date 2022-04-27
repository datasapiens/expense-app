import { useDispatch as useReduxDispatch } from 'react-redux';
import type { AppDispatch } from 'store/type';

// We'll use this hook typed to our state for type safety
// through out the application to dispatch actions from the store
export const useDispatch = () => useReduxDispatch<AppDispatch>();
