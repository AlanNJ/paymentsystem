import './FifthChild.css';
import Image from '../../Assets/colorfull.png';
import {TiTick} from 'react-icons/ti';
const FifthChild = ({handleGoBackMain,calculateResult,isRechargeClicked}) => {
  return (
    <div className='FifthChild'>
      <div className='FifthPage'>
        <div className='pageDetails'>
              <div className='logo-heading'>
              <TiTick className='icon' />
              </div>
              <h3 className='PageHeading'>Payment Completed</h3>
              <div className='Bank-icon'>
                 <img src={Image} alt='bank'></img>
              </div>
              <span className='Payment'>Payment Method</span>
              <p className='pageContains'>The Coins Worth $ {isRechargeClicked ? calculateResult() : '0'} has been recharged to given username account</p>
              <p>coin will be added shortly.</p>
              <div className='btn-goBack'>
                <button type='text' className='Backbtn' onClick={handleGoBackMain}>Go back</button>
              </div>
         </div>
      </div>
    </div>
  )
}

export default FifthChild
