import React from 'react';

const Backgroundsl = (props) => (
    <div style={props.style}>
        <h1>Stateless Component</h1>
        <button onClick={props.clicked}>
            {props.buttonTitle}
        </button>
    </div>
)

export default Backgroundsl;