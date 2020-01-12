import React from 'react';

import { Modal } from 'react-bootstrap';
import Button from '../FormElements/Button';

// const ErrorModal = props => {
//   return (
//     <Modal
//       onCancel={props.onClear}
//       header="An Error Occurred!"
//       show={!!props.error}
//       footer={<Button onClick={props.onClear}>Okay</Button>}
//     >
//       <p>{props.error}</p>
//     </Modal>
//   );
// };

const ErrorModal = props => {
  return (
    <>
    <Modal show={!!props.error} onHide={props.onClear}>
      <Modal.Header closeButton>
        <Modal.Title>An Error Occurred!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClear}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default ErrorModal;

