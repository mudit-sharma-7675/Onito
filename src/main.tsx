import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store/Store.tsx";
import { AppContext,AppProvider } from "./context/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <AppProvider>
    <App />
    </AppProvider>
  </Provider>
);
