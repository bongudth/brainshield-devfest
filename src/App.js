import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3 from "web3";
import Header from "./components/Header";
import Home from "./components/Home";
import ExploreProducts from "./components/ExploreProducts";
import NewProduct from "./components/NewProduct";

function App() {
    const [accountState, setAccountState] = useState(null);

    useEffect(() => {
        const getAccount = async () => {
            const web3 = new Web3(
                Web3.givenProvider || "http://localhost:8545"
            );
            const accounts = await web3.eth.getAccounts();
            setAccountState(accounts[0]);
        };

        getAccount();
    }, []);

    return (
        <React.Fragment>
            <h1>Thong tin tai khoan: {accountState}</h1>
            <Router>
                <header>
                    <Header />
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/explore" exact>
                            <ExploreProducts />
                        </Route>
                        <Route path="/new">
                            <NewProduct />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </React.Fragment>
    );
}

export default App;
