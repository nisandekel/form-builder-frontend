import React from 'react';

function FormList(props) {
    
    const forms = props.forms.map(form => <div>{form}</div>);

    return (
      <div className="FormList">
          {forms}
      </div>
    );
}

export default FormList;