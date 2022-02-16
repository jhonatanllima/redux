import { Provider } from "react-redux";

import store from "./store";

import { Catalog, Cart } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
