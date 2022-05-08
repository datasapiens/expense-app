import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomColor } from 'utils/generateRandomColor';
import { Category } from 'entities/Category';

export type State = Category[];

const initialState: State = [];

export const Categories = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		remove: (state, { payload }: PayloadAction<Pick<Category, 'id'>>) => {
			return state.filter((category) => category.id !== payload.id);
		},
		add: {
			reducer: (state, { payload }: PayloadAction<Category>) => {
				state.push(payload);
			},
			prepare: (props: Omit<Category, 'id' | 'color'>) => ({
				payload: {
					id: uuidv4(),
					color: generateRandomColor(),
					...props,
				},
			}),
		},
	},
});
