import { createBrowserHistory } from "history";
import Router from "./Router";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const history = createBrowserHistory({});

  return (
    <>
      <div className="App">
        <Router history={history} />
      </div>
    </>
  );
}

export default App;
