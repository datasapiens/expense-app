import { RootState } from "../../state.module";

export const selectCategories = (state: RootState) => state?.categories?.categories;
