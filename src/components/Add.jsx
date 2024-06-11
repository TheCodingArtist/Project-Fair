import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import uploadimg from '../assets/uploadimage.png'

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn btn-primary'> <i className="fa-solid fa-plus"></i>
    New Project
    </button>
    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> New Project Detail !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-4">
             <label>
               <input type="file" style={{display:'none'}}/>
                <img src={uploadimg} height={'200px'} alt="" />
             </label>
            </div>
            <div className="col-8">
              <div className="mt-2">
                <input type="text" className='form-control' placeholder='Project Name' />
              </div>
              <div className="mt-2">
                <input type="text" className='form-control' placeholder='Languages used in Project ' />
              </div>
              <div className="mt-2">
                <input type="text" className='form-control' placeholder='Git-Hub Link' />
              </div>
              <div className="mt-2">
                <input type="text" className='form-control' placeholder='Website Preview' />
              </div>
            </div>
          </div>
          
          <div className="mt-2">
            <input type="text" placeholder='Project-Overview' className='form-control' />
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Add