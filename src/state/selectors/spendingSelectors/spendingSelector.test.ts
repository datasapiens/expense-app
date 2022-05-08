import { i18n } from 'i18n';
import * as uuid from 'uuid';
import { RootState } from 'state/store';
import { Category } from 'entities/Category';
import { Transaction } from 'entities/Transaction';
import { spendingByCategories } from './spendingSelectors';

jest.mock('uuid');

const getCategory = (overrides: Partial<Category> = {}) => ({
	id: '1',
	color: '#000',
	label: 'Salary',
	...overrides,
});

const getTransaction = (overrides: Partial<Transaction> = {}) => ({
	amount: 100,
	category: '1',
	date: new Date().toISOString(),
	id: '0',
	label: 'Payment',
	...overrides,
});

describe('Spending By Category selectors', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should transactions correctly mapped to categories', () => {
		const category = getCategory({
			id: '1',
			color: '#000',
			label: 'Salary',
		});
		const iceCreamTransaction = getTransaction({
			amount: -2.5,
			category: '1',
			date: new Date().toISOString(),
			id: '0',
			label: 'Ice cream',
		});
		const kfcTransaction = getTransaction({
			amount: -10,
			category: '1',
			date: new Date().toISOString(),
			id: '1',
			label: 'KFC',
		});

		const state: RootState = {
			categories: [category],
			transactions: [iceCreamTransaction, kfcTransaction],
		};

		const result = spendingByCategories.resultFunc(
			state.categories,
			state.transactions,
		);

		expect(result).toIncludeAnyMembers([
			{
				id: category.id,
				label: category.label,
				color: category.color,
				total: iceCreamTransaction.amount + kfcTransaction.amount,
				spending: iceCreamTransaction.amount + kfcTransaction.amount,
				count: 2,
				income: 0,
			},
		]);
	});
	it('should add no category category if transaction exist but category does not', () => {
		const kfcTransaction = getTransaction({
			amount: 3000,
			category: '1',
			date: new Date().toISOString(),
			id: '1',
			label: 'Salary',
		});

		const state: RootState = {
			categories: [],
			transactions: [kfcTransaction],
		};

		const uuidMock = '1';
		const i18nMock = 'NoCategory';

		jest.spyOn(uuid, 'v4').mockImplementation(() => '1');
		jest.spyOn(i18n, 't').mockImplementation(() => i18nMock);

		const result = spendingByCategories.resultFunc(
			state.categories,
			state.transactions,
		);

		expect(result).toIncludeAnyMembers([
			{
				id: uuidMock,
				label: i18nMock,
				color: `#000`,
				total: kfcTransaction.amount,
				spending: 0,
				count: 1,
				income: kfcTransaction.amount,
			},
		]);
	});
});
