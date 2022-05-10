import { useRoutes } from "react-router-dom";
import Graphs from "../containers/Graphs";
import Main from "../containers/Main";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "graphs", element: <Graphs /> },
  ]);
  return routes;
};

export default Routes;
