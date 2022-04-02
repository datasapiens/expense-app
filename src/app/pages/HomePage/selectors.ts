import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { useSelector } from 'react-redux';
import { RootState } from 'types';

export const selectDomain = (state: RootState) =>
  state?.homePage || initialState;

export const select = () => createSelector([selectDomain], state => state);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useSelector(select());
