import { RouterProvider } from "react-router-dom";
import entries from "./entries";
import "./index.css";
import { Provider } from "@ebay/nice-modal-react";

const App = () => {
  return (
    <>
      <div className="relative w-full min-h-[100vh] mx-auto overflow-hidden">
        <Provider>
          <RouterProvider router={entries} />
        </Provider>
        ;
      </div>
    </>
  );
};

export default App;
