import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function BrickDetail({ title,
                 firstLine100,
                 secondLine100,
                 thirdLine100,
                 firstLine500,
                 secondLine500,
                 thirdLine500,
                 firstLine1000,
                 secondLine1000,
                 thirdLine1000,
                 fourthLine1000,
                 fifthLine1000,
                 background100,
                 background500,
                 background1000}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Brick
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>{title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="brick-wrapper-100" style={{display: background100 ? "flex" : "none"}}>

            <div className="brick-contents">
              <p className="brick-text-100 text-center">{firstLine100}</p>
              <p className="brick-text-100 text-center">{secondLine100}</p>
              <p className="brick-text-100 text-center">{thirdLine100}</p>
            </div>
          </div>
          <div className="brick-wrapper-500" style={{display: background500 ? "flex" : "none"}}>

            <div className="brick-contents">
              <p className="brick-text-500 text-center">{firstLine500}</p>
              <p className="brick-text-500 text-center">{secondLine500}</p>
              <p className="brick-text-500 text-center">{thirdLine500}</p>
            </div>
          </div>
          <div className="brick-wrapper-1000" style={{display: background1000 ? "flex" : "none"}}>

            <div className="brick-contents-1000">
              <p className="brick-text-1000 text-center">{firstLine1000}</p>
              <p className="brick-text-1000 text-center">{secondLine1000}</p>
              <p className="brick-text-1000 text-center">{thirdLine1000}</p>
              <p className="brick-text-1000 text-center">{fourthLine1000}</p>
              <p className="brick-text-1000 text-center">{fifthLine1000}</p>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BrickDetail
