import React from 'react';

const Input = (props) => {
    return(
        <input type = {props.type} name={props.name} {...props} style={{display:"block"}}/>
    );
}

export default Input;