import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isMainPage"}>
        <RouterProvider router={createHashRouter(appRoutes, {
          basename: "/capstone-project"
        })} />
      </StyleSheetManager>
    </div>
  );
}

export default App;