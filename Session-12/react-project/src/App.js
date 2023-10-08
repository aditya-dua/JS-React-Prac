import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css";


function App() {
  // Prevent page reload, clear input, set URL and push history on submit
  function handleSubmit (e, history, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <Router>
        <div className="container">
          <Route
            render={props => (
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}
          />
          <Switch>
            <Route
              path="/search/:searchInput"
              render={props => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </PhotoContextProvider>
  );
}

export default App;
