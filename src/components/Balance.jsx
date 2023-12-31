import React from 'react'
import './Balance.css'
import Arrow from '../assets/svgs/arrow.svg'
import Add from '../assets/svgs/add.svg'
import { useNavigate } from 'react-router-dom'
const Balance = () => {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='acct-bal'>
         Account Balance
        </div>
        <div className="bal">
            <span className='naira'>₦</span>
            <span className='amount'>0.00</span>
        </div>
        <div className="btns">
            <button onClick={() =>navigate('send')}>
                <img src={Arrow} alt="img" />
                <span>Send</span>
            </button>
            <button>
                <img src={Add} alt="" />
                <span>Add Money</span>
               
            </button>
        </div>
        
    </div>
  )
}

export default Balance