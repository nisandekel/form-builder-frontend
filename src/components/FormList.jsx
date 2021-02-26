import React from "react";
import { Button, Table } from "react-bootstrap";

function FormList(props) {
  const forms = props.forms.map((form) => {
    return (<tr id={"row_" + form.id} key={form.id}>
        <td>{form.id}</td>
        <td>{form.name}</td>
        <td>{form.numOfSubmissions}</td>
        <td>{form.submitPageLink}</td>
    </tr>);
  });

  return (
    <div className="FormList">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Form Id</th>
            <th>Form Name</th>
            <th>#Submissions</th>
            <th>Submit Page</th>
          </tr>
        </thead>
        <tbody>
        {forms}
        </tbody>
      </Table>
    </div>
  );
}

export default FormList;
