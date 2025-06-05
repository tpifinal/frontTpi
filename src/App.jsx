import {createBrowserHistory} from "history"
import Router from "./Router";
import './App.css'

function App() {
  const history = createBrowserHistory({})

  return (
    <>
      <div className="App">
        <Router history={history}/>
      </div>
    </>
  )
}

export default App
