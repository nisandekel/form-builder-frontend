import React from "react";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

function FormBuilder(props) {
  function AddFields() {
    return (
      <div>
        <h2>Add Fields</h2>
        <Form>
          <Form.Group>
            <Form.Label>Field label</Form.Label>
            <Form.Control type="text" placeholder="Enter field label" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Input name</Form.Label>
            <Form.Control type="text" placeholder="Enter input name" />
          </Form.Group>
          <Form.Group>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item>text</Dropdown.Item>
              <Dropdown.Item>date</Dropdown.Item>
              <Dropdown.Item>email</Dropdown.Item>
              <Dropdown.Item>tel</Dropdown.Item>
              <Dropdown.Item>number </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Form>
        <Button variant="success">Add Field</Button>
      </div>
    );
  }

  function SubmitButtonText() {
    return (
      <div className="SecondStep">
        <h2>Add Submit Button Text</h2>
        <Form>
          <Form.Group>
            <Form.Label>Submit button text</Form.Label>
            <Form.Control type="text" placeholder="Enter submit button text" />
          </Form.Group>
        </Form>
      </div>
    );
  }

  function FormName() {
    return (
      <div className="ThirdStep">
        <h2>Insert Form Name</h2>
        <Form>
          <Form.Group>
            <Form.Label>Form name</Form.Label>
            <Form.Control type="text" placeholder="Enter Form Name " />
          </Form.Group>
        </Form>
      </div>
    );
  }

  let CurrentStep = null;
  let isNextButtonShow = false;
  let isPrevButtonShow = false;
  let isSaveFormButtonShow = false;

  if (props.currentStep === 1) {
    CurrentStep = AddFields;
    isNextButtonShow = true;
  } else if (props.currentStep === 2) {
    CurrentStep = SubmitButtonText;
    isNextButtonShow = true;
    isPrevButtonShow = true;
  } else if (props.currentStep === 3) {
    CurrentStep = FormName;
    isPrevButtonShow = true;
    isSaveFormButtonShow = true;
  }
  return (
    <div className="FormBuilder">
      <CurrentStep />
      {isNextButtonShow ? <Button variant="success" onClick={props.nextButtonAction}>Next</Button> : null}
      {isPrevButtonShow ? <Button variant="success" onClick={props.prevButtonAction}>Prev</Button> : null}
      {isSaveFormButtonShow ? (
        <Button variant="success">Save Form</Button>
      ) : null}
    </div>
  );
}

export default FormBuilder;
