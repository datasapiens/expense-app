import getCategoryById from "../getCategoryById";
import INITIAL_CATEGORIES from '../../data/categories';

describe('getCategoryById', () => {
    it('should return correct category', () => {
        const categories = INITIAL_CATEGORIES;
        categories[2].id = 'testid'
        expect(getCategoryById('testid', categories)).toEqual({
            id: 'testid',
            label: 'Clothing',
        });
    });
});