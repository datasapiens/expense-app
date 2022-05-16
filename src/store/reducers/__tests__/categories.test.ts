import categoryReducer, { CategoriesState, addNewCategory, removeCategory } from '../categories';
import INITIAL_CATEGORIES from '../../../data/categories'


describe('category reducer', () => {
    const initialState: CategoriesState = {
        categories: [],
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect(categoryReducer(undefined, { type: 'unknown' })).toEqual({
            categories: INITIAL_CATEGORIES,
            status: 'idle',
        });
    });


    it('should handle success status when fetching category', () => {
        const categoriesPayload = [{
            title: 'Test category'
        }];
        const action = {
            type: addNewCategory.type, payload: categoriesPayload,

        };

        const actual = categoryReducer(initialState, action);
        expect(actual.categories).toEqual(categoriesPayload);
        expect(actual.status).toEqual('idle');
    });

    it('should remove category', () => {
        const categoriesPayload = [{
            title: 'Test category',
            id: 2
        }];
        const action = {
            type: addNewCategory.type, payload: categoriesPayload,
        };

        const actual = categoryReducer(initialState, action);
        expect(actual.categories).toEqual(categoriesPayload);
        expect(actual.status).toEqual('idle');

        const actionRemoved = {
            type: removeCategory.type, payload: categoriesPayload[0],
        };


        const actualRemoved = categoryReducer(initialState, actionRemoved);
        expect(actualRemoved.categories).toEqual([]);
        expect(actualRemoved.status).toEqual('idle');



    });
});
