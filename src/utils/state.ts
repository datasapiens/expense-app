export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializesState = JSON.stringify(state);
    localStorage.setItem("state", serializesState);
  } catch (err) {
    console.log(err);
  }
};
