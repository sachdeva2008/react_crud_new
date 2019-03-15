import React from 'react';
import ModalClasses from './Modal.css';



const Modal = (props) =>{
    const showClass = props.show?ModalClasses.ModalOpen:ModalClasses.ModalClosed;
    return (
        <div className={[ModalClasses.Modal,showClass].join(' ')}>
          {props.children}
        </div>
    );
}

export default Modal;