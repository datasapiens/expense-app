import { store } from '../configureStore';

describe('configureStore', () => {
  it('should return a store with injected enhancers', () => {
    expect(store).toEqual(
      expect.objectContaining({
        runSaga: expect.any(Function),
        injectedReducers: expect.any(Object),
        injectedSagas: expect.any(Object),
      }),
    );
  });

  it('should return an empty store', () => {
    expect(store.getState()).toBeUndefined();
  });
});
