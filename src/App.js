import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormList from "./components/FormList";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = { formList: [{id:1,name:"form1",numOfSubmissions: 0,submitPageLink:"link1" },{id:2,name:"form2",numOfSubmissions: 0,submitPageLink:"link2" }] };

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
