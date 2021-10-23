import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import ExploreProducts from "./components/ExploreProducts"
import NewProduct from "./components/NewProduct"

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <ExploreProducts />
          </Route>
          <Route path="/new-product">
            <NewProduct />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
