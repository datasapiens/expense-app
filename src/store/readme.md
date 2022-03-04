# Global State Management using Redux's Reducer Pattern

## Terms

1. GlobalStore

- index.js
- shared global state of application

2. InitialState

- snapshot of GlobalStore at starting of application
- usually empty or defaults value are kept

3. useGlobalStore

- hook to access GlobalStore

4. Reducers

- Pure functions that modify GlobalStore
- input: current Global Store and a action
- output: new Global Store

5. RootReducer

- function that combines all individual reducers into one main reducer

6. Actions

- type of fixed/predefined behaviour you want to run on global state
- must be a very specific

7.  Dispatchers

- functions that tell reducers what kind of actions to run & with what values

8.  BindActions

- when using root reducers, this tells root reducers to dispatch action from which particular individual reducer

## Process to add a new variable on Global Store - wip

1. Add initial value on initialState
2. Add a reducer function to modify state bases on some action type
3. Inform rootReducer about the newly added reducer
4. Bind actions using hooks
