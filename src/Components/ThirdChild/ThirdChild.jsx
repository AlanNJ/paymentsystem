import './thirdChild.css'
import {GiSandsOfTime} from 'react-icons/gi';
const ThirdChild = ({remainingTime}) => {
  return (
    <div className='ThirdChild'>
      <div className='Third-container'>
       <div className='big_icon'>
        <div className='GiStandsofTimeicon'>
          <GiSandsOfTime className='icon'/>
        </div>
       </div>
        <div className='Content_heading'>
          <h3 className='content_Title'>Processing your payment</h3>
          <span>this could take a few second</span>
        </div>
        <div className='Time_Container'>
        <p>{Math.floor(remainingTime / 60).toString().padStart(2, '0')}:{(remainingTime % 60).toString().padStart(2, '0')}</p>
        </div>
      </div>
    </div>
  )
}

export default ThirdChild
