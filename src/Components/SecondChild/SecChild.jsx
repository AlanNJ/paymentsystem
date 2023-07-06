import './secChild.css';
import {IoCloseOutline} from 'react-icons/io5';
import {BsCurrencyDollar} from 'react-icons/bs';
import firstImage from '../../Assets/colorfull.png';
import { useState } from 'react';

const SecChild = ({goBack, displayedNumber,calculateResult,isRechargeClicked,gotoThirdPage}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isPayNowClicked, setPayNowClicked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    const handleRadioChange = () => {
      setIsChecked(!isChecked);
      setPayNowClicked(true);
    };
  return (
    <div className='Second_Child'>
      <div className='Second-Container'>
            <div className='header'>
              <span className='icon' onClick={goBack}><IoCloseOutline  className='icon'/></span>
               <div className='title'>
                 <h2>Order Summary</h2>
               </div>
            </div>
            <div className='list_contents'>
              <div className='Acc_name'>
                <p>Account</p>
                <p>rovewithme</p>
              </div>
              <div className='Total-coins'>
                <p>{displayedNumber} Coins</p>
                <p><BsCurrencyDollar className='icon' />{isRechargeClicked ? calculateResult() : '0'}</p>
              </div>
            </div>
              <div className='Bank-details'>
                <span>select a payment method</span>
                <div className='small-contents' onClick={handleRadioChange}>
                  <div className='img-Container'>
                    <img src={firstImage} alt='bank'></img>
                  </div>
                  <input type="radio" checked={isChecked} onChange={handleCheckboxChange}/>
                </div>
              </div>
              <span className='secondTitle'>Total $ {isRechargeClicked ? calculateResult() : '0'}</span>
            <div className='btn-Reachare'>
               <span className='Text'>?</span>
               <button type='submit' className={`SubmitBtn ${isPayNowClicked ? 'active' : ''}`} onClick={gotoThirdPage}>Pay Now</button>
            </div>
         </div>
    </div>
  )
}

export default SecChild
