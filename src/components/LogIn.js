import React, { useState } from 'react'
import { Button } from '@mui/material';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css'

function LogIn() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Close = <CloseIcon />;
  return (
    <div>
       <Button onClick={() => setIsModalOpen(true)}>LogIn</Button>
          <Modal
            open = {isModalOpen}
            CloseIcon = {Close}
            onClose = {() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick = {false}
            styles={{
              overlay:{
                height:"auto",
              }
            }}
            >
            <div>
            <h4>LogIn</h4>
            </div>
            <div className='modal__field'>
              <label className='email'>E-Mail</label>
              <input type='email' ReactQuill placeholder='Enter your email Id'/>
              <label className='password'>Password</label>
              <input type='password' placeholder='**********' />
            </div>
            <div className='modal__button'>
              <Button className='cancel' onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type='submit' className='add'>
                Submit
              </Button>
            </div>
          </Modal>
    </div>
  )
}

export default LogIn
