import {FaTiktok} from 'react-icons/fa';
import {BsCurrencyDollar} from 'react-icons/bs';
import './main.css';

const Main = ({gotoNextPage,handleBoxClick}) => {
  return (
    <div className='Main_page'>
      <nav className='Nav_bar'>
         <div className='logo'>
          <span><FaTiktok className='icon' />TikTok</span> 
         </div>
         
         <div className='search_bar'>
           <input type='text'  placeholder='Search' />
         </div>
      </nav>

      <div className='Container'>
        <div className='top_container'>
          <div >
            <h3 className='Title'>Get Coins</h3>
          </div>
          <div className='user_search_bar'>
            <input type='text' placeholder='Enter Username' />
          </div>
        </div>
        <div className='middle_container'>
          <div className='second_title'>
            <span>Recharge</span>
          </div>
        </div>
        <div className='coins_Collection'>
         <div className= 'box item-1' onClick={() => handleBoxClick(65)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>65</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>0.84</span>
           </div>
          </div>
          <div className=' box item-2' onClick={() => handleBoxClick(70)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>70</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>0.90</span>
           </div>
          </div>
          <div className=' box item-1' onClick={() => handleBoxClick(350)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>350</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>4.51</span>
           </div>
          </div>
          <div className=' box item-1' onClick={() => handleBoxClick(700)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>700</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>9.03</span>
           </div>
          </div>
          <div className=' box item-1' onClick={() => handleBoxClick(1400)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>1400</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>18.06</span>
           </div>
          </div>
          <div className=' box item-1' onClick={() => handleBoxClick(3500)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>3500</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>45.15</span>
           </div>
          </div>
          <div className=' box item-1' onClick={() => handleBoxClick(7000)}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='money'>7000</span>
           </div>
           <div className='rupees'>
             <BsCurrencyDollar className='icon'/>
             <span>90.30</span>
           </div>
          </div>
          <div className='btn-primary box' onClick={gotoNextPage}>
           <div className='box-content'>
             <div className='circle'>
              <div className='inner-circle'>
                <FaTiktok  className='icon'/>
              </div>
             </div>
             <span className='text'>CUSTOM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
