import React from "react";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";
import { TiDivideOutline } from "react-icons/ti";
import { LiaStarOfLifeSolid } from "react-icons/lia";

const Calculate=()=>{

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    function validateInputs (){
        if (num1 === '' || num2 === '') {
          setErrorMessage('Both numbers are required');
          setResult('');
          return false;
        }
    
        if (!/^-?\d+(\.\d+)?$/.test(num1) || !/^-?\d+(\.\d+)?$/.test(num2)) {
          setErrorMessage('Invalid number format');
          setResult('');
          return false;
        }
    
        setErrorMessage('Success!');
        return true;
    };


    const handleOperation = (operation) => {
        if (validateInputs()) {
          const number1 = parseFloat(num1);
          const number2 = parseFloat(num2);
    
          switch (operation) {
            case '+':
              setResult(number1 + number2);
              break;
            case '-':
              setResult(number1 - number2);
              break;
            case '*':
              setResult(number1 * number2);
              break;
            case '/':
              setResult(number1 / number2);
              break;
            default:
              setResult('');
          }
        }
      };


      return (
        <div className="calculator">
         <div className="cart">
         <h1>React Calculator</h1>
          <input
            type="text"
            placeholder="Num 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          /><br></br>
          <input
            type="text"
            placeholder="Num 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
         
         <div className="blockCal">
         <button onClick={() => handleOperation('+')}><AiFillPlusCircle/></button>
          <button onClick={() => handleOperation('-')}><AiFillMinusCircle/></button>
          <button onClick={() => handleOperation('*')}><LiaStarOfLifeSolid/></button>
          <button onClick={() => handleOperation('/')}><TiDivideOutline/></button>
          <div className="error">{errorMessage}</div>
          {result !== '' && (
            <div className="success">
              Result: {result.toFixed(2)}
            </div>
          )}
         </div>
         </div>


        </div>
      );
}

export default Calculate;