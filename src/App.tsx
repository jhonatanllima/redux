import { Provider } from "react-redux";

import store from "./store";

import { Catalog } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
