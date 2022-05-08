import { createListenerMiddleware } from "@reduxjs/toolkit";

export const localStorageSync = createListenerMiddleware();

localStorageSync.startListening({
  predicate: () => true,
  effect: async (_action, { getState }) => {
    const state = getState();
    localStorage.setItem("state", JSON.stringify(state));
  },
});
