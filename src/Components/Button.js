import React from 'react';

const Button = (props) => {
    console.log(props);
    return (
        <input type = {props.type} name = {props.name} value={props.text} {...props} />
    );
}

export default Button;