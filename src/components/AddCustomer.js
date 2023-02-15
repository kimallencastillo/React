import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCustomer(props) {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="block mx-auto m4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        + Add Customer
    </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
        onSubmit={(e)=> {
          e.preventDefault();
          setName('')
          setIndustry('')
         
          props.newCustomer(name, industry);
        }}
        id="editModal" className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
              Customer Name
              </label>
              </div>
              <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="name" 
                  placeholder='Hitori GotoH'
                  type="text" 
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                Industry
              </label>
              </div>
              <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="industry" 
                  placeholder='Bocchi The Rock'
                  type="text" 
                  value={industry}
                  onChange={(e) => {setI  ndustry(e.target.value)}}
                  />
                </div>
            </div>
           
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
          className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' 
          onClick={handleClose}>
            Close
          </button>
          <button
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
            onClick={handleClose}
            form="editModal">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;