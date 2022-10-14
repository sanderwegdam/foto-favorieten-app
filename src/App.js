import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import Favorites from './components/Favorites';

class App extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (<>
      <div><Favorites /></div>
      < PhotoContextProvider >
        <HashRouter basename="/">
          <div className="container">
            <Route render={props => (<Header handleSubmit={this.handleSubmit} history={props.history} />)} />
            <Switch>
              <Route path="/strand" render={() => <Item searchTerm="strand" />} />
              <Route path="/lente" render={() => <Item searchTerm="lente" />} />
              <Route path="/zomer" render={() => <Item searchTerm="zomer" />} />
              <Route path="/herfst" render={() => <Item searchTerm="herfst" />} />
              <Route path="/search/:searchInput" render={props => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
              />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    </>
    );
  }
}

export default App;
