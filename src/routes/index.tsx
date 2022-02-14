import { useRoutes } from "react-router-dom";
import Graphs from "../components/Graphs";
import Main from "../components/Main";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "graphs", element: <Graphs /> },
  ]);
  return routes;
};

export default Routes;
