import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormList from "./components/FormList";
import FormBuilder from "./components/FormBuilder";

class App extends React.Component {
  state = {
    formList: [
      {
        id: 1,
        name: "form1",
        numOfSubmissions: 0,
        submitPageLink: "link1",
        fields: [
          {
            inputLabel: "First Name",
            inputName: "FirstName",
            inputType: "text",
          },
        ],
      },
      {
        id: 2,
        name: "form2",
        numOfSubmissions: 0,
        submitPageLink: "link2",
        fields: [
          {
            inputLabel: "First Name",
            inputName: "FirstName",
            inputType: "text",
          },
          {
            inputLabel: "Last Name",
            inputName: "LastName",
            inputType: "text",
          },
        ],
      },
    ],
    currentFormToAdd: {
      fields: [
        {
          inputLabel: "First Name",
          inputName: "FirstName",
          inputType: "text",
        },
        {
          inputLabel: "Age",
          inputName: "Age",
          inputType: "number",
        },
      ],
      buttonSubmitText: "submit",
      formName: "Test1",
    },
    builderStep: 1,
  };

  nextStepButtonClicked = () => {
    if (this.state.builderStep === 1) {
      this.setState({ builderStep: 2 });
    } else if (this.state.builderStep === 2) {
      this.setState({ builderStep: 3 });
    }
  };

  prevStepButtonClicked = () => {
    if (this.state.builderStep === 2) {
      this.setState({ builderStep: 1 });
    } else if (this.state.builderStep === 3) {
      this.setState({ builderStep: 2 });
    }
  };

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
              <li>
                <Link to="/FormBuilder">Add Form</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/FormList">
              <FormList forms={this.state.formList} />
            </Route>
            <Route path="/FormBuilder">
              <FormBuilder
                prevButtonAction = {this.prevStepButtonClicked}
                nextButtonAction = {this.nextStepButtonClicked}

                formData={this.state.currentFormToAdd}
                currentStep={this.state.builderStep}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
