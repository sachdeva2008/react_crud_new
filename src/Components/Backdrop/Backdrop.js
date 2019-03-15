import React from 'react';
import classes from  './Backdrop.css';

const Backdrop = (props) =>{
    
    const showClass = props.show?classes.BackdropShow:classes.BackdropHide;
    return (
        <div className={`${classes.Backdrop} ${showClass}`}
         onClick={props.clickHandler}
        ></div>
    );
}

export default Backdrop;