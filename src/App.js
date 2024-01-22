import { RouterProvider, createHashRouter } from "react-router-dom";
import appRoutes from "./routes/AppRoutes";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isMainPage"}>
        <RouterProvider router={createHashRouter(appRoutes)} />
      </StyleSheetManager>
    </div>
  );
}

export default App;