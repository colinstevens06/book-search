import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import SearchPage from "./pages/Search"
import NoMatch from "./pages/NoMatch"
import SavedPage from "./pages/Saved"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/books"]}>
            <SearchPage />
          </Route>
          <Route exact path="/saved">
            <SavedPage />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
