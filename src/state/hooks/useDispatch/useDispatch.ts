import * as redux from "react-redux";
import { AppDispatch } from "state/store";

export const useDispatch = () => redux.useDispatch<AppDispatch>();
