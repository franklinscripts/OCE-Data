import React from 'react'
import Navbar from './Navbar'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import './Send.css'
import { NotificationsOutlined } from '@mui/icons-material'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom'

const Send = () => {
  return (
    <div className='send-container'>
        <Navbar 
        initialNav={
            <div className='send-trans'> 
            <div className='send-icon' onClick={() => history.back()}>
                <ArrowBackIosNewIcon  />
            </div>
            <span>Transfer</span>
                
            </div>
        }
        finalNav={
            <div>
              <NotificationsOutlined style={{color:'#777E90', fontSize: '30px'}}  />
            </div>
          }
          
        />
        <form action="" className='form'>
            <div className='form-container'>
                <span className="header">send funds to another user</span>
                <p>Quickly transfer funds to another user on ocedata.</p>

                <div className="form-element">
                    <div className="form-el1">
                    <label>Email</label>
                    <input type="text" placeholder='useremail@here.com' />
                    </div>
                    <div className="form-el2">
                    <label>Amount</label>
                    <input type="text" placeholder='0.00' />
                    </div>
                    <button type='submit'>
                    Continue <ArrowRightAltIcon />
                    </button>

                </div>
            </div>
        </form>

        
    </div>
  )
}

export default Send