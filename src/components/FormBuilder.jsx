import React from "react";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";

function FormBuilder(props) {
  let CurrentStepComponent = null;
  let isNextButtonShow = false;
  let isPrevButtonShow = false;
  let isSaveFormButtonShow = false;
  const buttonSubmitTextRef = React.createRef();
  const fieldlabelRef = React.createRef();
  const inputNameRef = React.createRef();
  const inputTypeRef = React.createRef();
  const formNameRef = React.createRef();

  const handleNext = () => {
    if (props.currentStep === 1) {
      props.nextButtonAction();
    } else if (props.currentStep === 2) {
      props.nextButtonAction(buttonSubmitTextRef.current.value);
    }
  };

  const addFieldToForm = () => {
    const fieldLabel = fieldlabelRef.current.value;
    const inputName = inputNameRef.current.value;
    const inputType = inputTypeRef.current.value;
    const field = { fieldLabel, inputName, inputType };
    props.addFieldToForm(field);
  };

  const AddField = () => {
    return (
      <div>
        <h2>Add Fields</h2>
        <Form>
          <Form.Group>
            <Form.Label>Field label</Form.Label>
            <Form.Control
              ref={fieldlabelRef}
              type="text"
              placeholder="Enter field label"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Input name</Form.Label>
            <Form.Control
              ref={inputNameRef}
              type="text"
              placeholder="Enter input name"
            />
          </Form.Group>
          <Form.Group>
            <DropdownButton ref={inputTypeRef} title="Input type">
              <Dropdown.Item>text</Dropdown.Item>
              <Dropdown.Item>date</Dropdown.Item>
              <Dropdown.Item>email</Dropdown.Item>
              <Dropdown.Item>tel</Dropdown.Item>
              <Dropdown.Item>number </Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Form>
        <Button variant="success" onClick={addFieldToForm}>
          Add Field
        </Button>
      </div>
    );
  };

  const SubmitButtonText = () => {
    return (
      <div className="SecondStep">
        <h2>Add Submit Button Text</h2>
        <Form>
          <Form.Group>
            <Form.Label>Submit button text</Form.Label>
            <Form.Control
              ref={buttonSubmitTextRef}
              type="text"
              placeholder="Enter submit button text"
            />
          </Form.Group>
        </Form>
      </div>
    );
  };

  const FormName = () => {
    return (
      <div className="ThirdStep">
        <h2>Insert Form Name</h2>
        <Form>
          <Form.Group>
            <Form.Label>Form name</Form.Label>
            <Form.Control
              ref={formNameRef}
              type="text"
              placeholder="Enter Form Name "
            />
          </Form.Group>
        </Form>
      </div>
    );
  };

  if (props.currentStep === 1) {
    CurrentStepComponent = AddField;
    isNextButtonShow = true;
  } else if (props.currentStep === 2) {
    CurrentStepComponent = SubmitButtonText;
    isNextButtonShow = true;
    isPrevButtonShow = true;
  } else if (props.currentStep === 3) {
    CurrentStepComponent = FormName;
    isPrevButtonShow = true;
    isSaveFormButtonShow = true;
  }

  return (
    <div className="FormBuilder">
      <CurrentStepComponent />
      {isNextButtonShow ? (
        <Button variant="success" onClick={handleNext}>
          Next
        </Button>
      ) : null}
      {isPrevButtonShow ? (
        <Button variant="success" onClick={props.prevButtonAction}>
          Prev
        </Button>
      ) : null}
      {isSaveFormButtonShow ? (
        <Button
          variant="success"
          onClick={() => props.saveForm(formNameRef.current.value)}
        >
          Save Form
        </Button>
      ) : null}
    </div>
  );
}

export default FormBuilder;
