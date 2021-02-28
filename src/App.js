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
      name: "Test1",
    },
    builderStep: 1,
  };

  nextStepButtonClicked = (buttonSubmitText = null) => {
    if (this.state.builderStep === 1) {
      this.setState({ builderStep: 2 });
    } else if (this.state.builderStep === 2) {
      this.setState({ builderStep: 3, buttonSubmitText });
    }
  };

  prevStepButtonClicked = () => {
    if (this.state.builderStep === 2) {
      this.setState({ builderStep: 1 });
    } else if (this.state.builderStep === 3) {
      this.setState({ builderStep: 2 });
    }
  };

  addFieldToCurrentForm = (field) => {
    const currentFormToAddNew = { ...this.state.currentFormToAdd };
    currentFormToAddNew.fields.push(field);
    this.setState({ currentFormToAdd: currentFormToAddNew });
  };

  saveCurrentForm = (formName) => {
    const form = {
      id: this.state.formList.length + 1,
      name: formName,
      numOfSubmissions: 0,
      fields: [...this.state.currentFormToAdd.fields],
    };

    const formList = [...this.state.formList];
    formList.push(form);

    const currentFormToAdd = {
      fields: [],
      buttonSubmitText: "",
      name: "",
    };

    this.setState({ formList, builderStep: 1, currentFormToAdd });
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
                prevButtonAction={this.prevStepButtonClicked}
                nextButtonAction={this.nextStepButtonClicked}
                addFieldToForm={this.addFieldToCurrentForm}
                formData={this.state.currentFormToAdd}
                currentStep={this.state.builderStep}
                saveForm={this.saveCurrentForm}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
