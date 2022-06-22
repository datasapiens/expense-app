import { combineEpics } from "redux-observable";
import categoriesEpics from "../components/categories/categories.epic";
import dashboardEpics from "../components/dashboard/dashboard.epic";
import transactionsEpics from "../components/transactions/transactions.epic";

const rootEpics = combineEpics(
  ...categoriesEpics,
  ...transactionsEpics,
  ...dashboardEpics,
);

export default rootEpics;