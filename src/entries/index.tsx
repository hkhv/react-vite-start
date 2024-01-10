import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

const routesEl = (
  <Route>
    <Route path="/" element={<MainLayout />}>
      <Route path="/" lazy={() => import("./Home")} />
      <Route path="home" lazy={() => import("./Home")} />
      <Route path="other" lazy={() => import("./Other")} />
    </Route>
  </Route>
);

const routes = createBrowserRouter(createRoutesFromElements(routesEl));
export default routes;
