export const asyncer = (dispatch, state) => action =>
  typeof action === 'function' ? action(dispatch, state) : dispatch(action)

// logging utility
export const logger = (action, prevState, currentState) => {
  if (process.env.NODE_ENV !== 'production') {
    console.groupCollapsed('GlobalStore Log')
    console.log('%c Action:', 'color: blue', action)
    console.log('%c Previous State:', 'color: red', prevState)
    console.log('%c Current State:', 'color: green', currentState)
    console.groupEnd()
  }
}
