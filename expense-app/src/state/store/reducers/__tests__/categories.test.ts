import { DEFAULT_CATEGORIES } from "../../../../data/data";
import categoryReducer, { CategoriesState, addNewCategory, deleteCategory } from "../categories.reducer";


describe('category reducer', () => {
    const initialState: CategoriesState = {
        categories: [],
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect(categoryReducer(undefined, { type: 'unknown' })).toEqual({
            categories: DEFAULT_CATEGORIES,
            status: 'idle',
        });
    });


    it('should handle success status when fetching category', () => {
        const categoriesPayload = [{
            label: 'Test category'
        }];
        const action = {
            type: addNewCategory.type, payload: categoriesPayload,

        };

        const actual = categoryReducer(initialState, action);
        expect(actual.categories).toEqual(categoriesPayload);
        expect(actual.status).toEqual('idle');
    });

    it('should delete category', () => {
        const categoriesPayload = [{
            label: 'Test category',
            id: 2
        }];
        const action = {
            type: addNewCategory.type, payload: categoriesPayload,
        };

        const actual = categoryReducer(initialState, action);
        expect(actual.categories).toEqual(categoriesPayload);
        expect(actual.status).toEqual('idle');

        const actionDelete = {
            type: deleteCategory.type, payload: categoriesPayload[0],
        };

        const actualDelete = categoryReducer(initialState, actionDelete);
        expect(actualDelete.categories).toEqual([]);
        expect(actualDelete.status).toEqual('idle');

    });
});

