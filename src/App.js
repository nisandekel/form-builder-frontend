import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormList from "./components/FormList";


class App extends React.Component {
  state = { formList: ["sa","aas"] };

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">home</Link>
              </li> */}
              <li>
                <Link to="/FormList">Form List</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/FormList">
              <FormList forms={this.state.formList}/>
            </Route>
            {/* <Route path="/">
            </Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
