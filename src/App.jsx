import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store";
import AppLayout from "./Pages/AppLayout";

function App() {
  // const x=123;
  // efc
  return (
    <Provider store={store}>
      <div className=" ">
        <BrowserRouter>

          <AppLayout />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
