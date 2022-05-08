import { Categories, State } from './categories';

describe('Categories slice', () => {
	it('should add category', () => {
		const action = Categories.actions.add({ label: 'Test ' });

		const state: State = Categories.reducer([], action);

		expect(state).toHaveLength(1);

		expect(state).toPartiallyContain(action.payload);
	});
	it('should remove category', () => {
		const action = Categories.actions.remove({ id: '1' });

		const state: State = Categories.reducer(
			[{ id: '1', label: 'Food', color: '#00FF00' }],
			action,
		);

		expect(state).toHaveLength(0);
		expect(state).toEqual([]);
	});
});
