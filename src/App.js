import { Provider } from "react-redux";

import { Layout } from "./components";
import createStore from "./store/createStore";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Layout />
    </div>
  </Provider>
);

export default App;
