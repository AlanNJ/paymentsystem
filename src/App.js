import './App.css';
import FifthChild from './Components/FifthChild/FifthChild';
import ForthChild from './Components/ForthChild/ForthChild';
import ThirdChild from './Components/ThirdChild/ThirdChild';
import SecChild from './Components/SecondChild/SecChild';
import Main from './Components/Main/Main';
import Child from './Components/Child/Child';
import { useState , useEffect} from 'react';
function App(){
  const [showChildPage,setShowChildPage] = useState(false);
  const [showSecondChild,setShowSecondChild] = useState(false);
  const [showThirdChild,setShowThirdChild] = useState(false);
  const [showForthChild, setShowForthChild] = useState(false);
  const [showFifthChild, setShowFifthChild] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);
  const [displayedNumber , setDisplayedNumber] = useState('30 -2,50000,00');
  const [isRechargeClicked, setIsRechargeClicked] = useState(false);

  const [remainingTime, setRemainingTime] = useState(299); // Total time in seconds

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);

  const gotoNextPage = () => {
     setShowChildPage(true);
  }
  const goBack = () => {
    setShowChildPage(false);
    setShowSecondChild(false);
    setShowMainPage(true);
    
  }
  const gotoAnotherPage = () => {
    setShowSecondChild(true);
  }

  const handleNumberClick = (number) => {
    setDisplayedNumber(prevNumber => prevNumber === '30 -2,50000,00' ? number : prevNumber + number);
    setIsRechargeClicked(true);
  };

  const handleClear = () => {
    setDisplayedNumber('30 -2,50000,00');
    setIsRechargeClicked(false);
  }
  const calculateResult = () => {
    const number = parseFloat(displayedNumber.replace(/[^0-9.-]+/g, ''));
    const result = number * (1.29 / 100);
    return result.toFixed(2); // Adjust the precision as needed
  };

  const gotoThirdPage = () => {
    // setShowThirdChild(true);
    setShowForthChild(false);
    setShowThirdChild((prevValue) => !prevValue);
  }
  useEffect(() => {
    if (showThirdChild) {
      const timeout = setTimeout(() => {
        setShowForthChild(true);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showThirdChild]);

  useEffect(() => {
    if (showForthChild) {
      const timeout = setTimeout(() => {
        setShowFifthChild(true);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showForthChild]);

  const handleGoBackMain = () => {
    setShowFifthChild(false);
    setShowForthChild(false); 
    setShowThirdChild(false);
    setShowSecondChild(false);
    setShowChildPage(false);
    setShowMainPage(true);
    setDisplayedNumber('30 -2,50000,00');
  };
  
  const handleBoxClick = (coinsValue) => {
    setDisplayedNumber(coinsValue.toString());
    setShowChildPage(true);
    setIsRechargeClicked(true);
  };
  return (
    <div className="App">
     {showMainPage && <Main gotoNextPage={gotoNextPage} handleBoxClick={handleBoxClick}/>}
     {showChildPage && <Child goBack = {goBack} 
                              gotoAnotherPage={gotoAnotherPage}
                              displayedNumber={displayedNumber}
                              handleClear={handleClear}
                              handleNumberClick={handleNumberClick}
                              isRechargeClicked={isRechargeClicked}
                              calculateResult={calculateResult}
                              handleBoxClick={handleBoxClick}
                              />}
     {showSecondChild ? <SecChild goBack={goBack}
                                   displayedNumber={displayedNumber}
                                   isRechargeClicked={isRechargeClicked}
                                   calculateResult={calculateResult}
                                   gotoThirdPage={gotoThirdPage}
     /> : ' '}
{showThirdChild ? <ThirdChild remainingTime={remainingTime} /> : null}

    {showForthChild ? <ForthChild /> : ''}
    {showFifthChild && <FifthChild handleGoBackMain={handleGoBackMain} 
                                   calculateResult={calculateResult}
                                   isRechargeClicked={isRechargeClicked}
                                   />}
    </div>
  );
     
}

export default App;
