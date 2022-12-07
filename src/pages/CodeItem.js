import React, { useState } from 'react';
import Modal from 'react-modal';

import classes from './CodeItem.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CodeItem = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <li className={classes.code}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>Choose a student</div>
          <form>
            <input />
            <button
              onClick={() => {
                console.log('session');
              }}
            >
              Chooseכ
            </button>
          </form>
        </Modal>
      </div>
    </li>
  );
};

export default CodeItem;
