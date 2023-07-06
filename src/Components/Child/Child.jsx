// import React, { useState } from 'react'
import { FaTiktok } from 'react-icons/fa';
import {IoCloseOutline} from 'react-icons/io5';
import {LuShieldClose} from 'react-icons/lu';
import './child.css'
const Child = ({goBack,gotoAnotherPage,isRechargeClicked, handleNumberClick,handleClear,displayedNumber,calculateResult}) => {
  return (
  <div className='container'>
    <div className='childContainer'>
     <div className='Contents'>
        <div className='title'>
          <h2>Custom</h2>
          <span className='icon'><IoCloseOutline  className='icon' onClick={goBack}/></span>
        </div>
        <div className='InputBox'>
          <div className='box-content'>
            <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
            </div>
             <span className='money'>{displayedNumber}</span>
          </div>
        </div>
        <div className='buttonContainer'>
          <button type='text' onClick={()=>handleNumberClick('1')}>1</button>
          <button type='text' onClick={()=>handleNumberClick('2')}>2</button>
          <button type='text' onClick={()=>handleNumberClick('3')}>3</button>
          <button type='text' onClick={ handleClear}><LuShieldClose className='btn-icon'/></button>
          <button type='text' onClick={()=>handleNumberClick('4')}>4</button>
          <button type='text' onClick={()=>handleNumberClick('5')}>5</button>
          <button type='text' onClick={()=>handleNumberClick('6')}>6</button>
          <button type='text' onClick={()=>handleNumberClick('000')}>000</button>
          <button type='text' onClick={()=>handleNumberClick('7')}>7</button>
          <button type='text' onClick={()=>handleNumberClick('8')}>8</button>
          <button type='text' onClick={()=>handleNumberClick('9')}>9</button>
          <button type='text' onClick={()=>handleNumberClick('0')}>0</button>
        </div>
        <span className='secondTitle'>Total $ {isRechargeClicked ? calculateResult() : '0'}</span>
        <div className='btn-Reachare'>
          <span className='Text'>?</span>
          <button type='submit' className={`SubmitBtn ${isRechargeClicked ? 'active' : ''}`} onClick={gotoAnotherPage}>Recharge</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Child

