import React, { useEffect, useRef, useState, useCallback } from 'react';
import Copyimg from '../assets/copy-solid.svg';
import Green from '../assets/green-circle-icon.svg';
import Red from '../assets/red-circle-svgrepo-com.svg'
import Yellow from '../assets/yellow-circle-svgrepo-com.svg'

function Pass() {
  let [length, setlen] = useState(8);
  let [upper, setupper] = useState(false);
  let [lower, setlower] = useState(false);
  let [number, setnumber] = useState(false);
  let [symbol, setsymbol] = useState(false);
  let [pass, setpass] = useState('');
  let [copyactive, setcopyactive] = useState(false);
  let [strength,setstrength]=useState('weak')


  // useCallback function to generate password
  let generatepass = useCallback(() => {
    let passw = '';
    let upperc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerc = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let sym = '!@#$%^&*()_+';

    if (number) {
      passw += num;
    }
    if (upper) {
      passw += upperc;
    }
    if (lower) {
      passw += lowerc;
    }
    if (symbol) {
      passw += sym;
    }

    let pass = '';
    for (let i = 0; i < length; i++) {
      let Char = Math.floor(Math.random() * passw.length);
      pass += passw.charAt(Char);
    }
    setpass(pass);
  }, [length, upper, lower, number, symbol]);

  // Ref hook
  let passRef = useRef(null);


  let copyClipboard = useCallback(() => {
    passRef.current.select();
    window.navigator.clipboard.writeText(passRef.current.value);
    setcopyactive(true);
    setTimeout(() => {
      setcopyactive(false);
    }, 3000);
  }, [pass]);

  let checkStrength=useCallback(()=>{
    let passVal=passRef.current.value;
    let Strengthval='weak';
    if(passVal.length>8 && (upper || lower) && number &&symbol  ){
      Strengthval='strong';
    }
    else if(passVal.length>7 && (upper && lower) || (number&&symbol)){
      Strengthval='medium';
    }
    
    
    setstrength(Strengthval);
   

    
  },[length,upper,lower,number,symbol])
let changeColor=useCallback(()=>{
  if(strength==='weak'){
    return <img src={Red} alt='red-circle-svgrepo-com.svg' width="15" height="15" />
  }
  else if(strength==='medium'){
    return <img src={Yellow} alt='yellow-circle-svgrepo-com.svg' width="15" height="15" />
  }
  else if(strength==='strong'){
    return <img src={Green} alt='green-circle-icon.svg' width="15" height="15" />
  }

})
  // Effect hook to generate password
  useEffect(() => {
    generatepass();
  
  }, [length, upper, lower, number, symbol, generatepass]);
  useEffect(()=>{
    checkStrength();
  },[pass,checkStrength]);

  return (
    <div className='bg-main-background w-screen h-screen flex flex-col items-center justify-center font-spartan'>
      <div className='bg-container-background max-w-md p-6 rounded-lg shadow-md'>
        <div className='bg-whitesmoke rounded-lg pt-2 my-4 border-b-4 border-slider-bar relative'>
          <input
            readOnly
            value={pass}
            placeholder="Password"
            ref={passRef}
            className="w-full bg-transparent py-4 px-4 text-main-text font-medium text-xl leading-7 tracking-wide pr-12 border-none focus:outline-none focus:bg-gray-200 focus:rounded-lg placeholder-main-text placeholder-opacity-50 placeholder-uppercase placeholder-absolute placeholder-top-1/2 placeholder-left-6 placeholder-transform placeholder--translate-y-1/2 placeholder-text-xl placeholder-leading-7"
          />
          <button className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer" onClick={copyClipboard}>
            <span className={`copymssg absolute bg-copy-button-disabled-background text-main-text -base top-[35px] left-[-25px] py-1 px-3 rounded-2xl transition-all duration-250 ease-in-out ${copyactive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>Copied</span>
            <img src={Copyimg} alt='copy-solid.svg' width="23" height="23" />
          </button>
        </div>

        <div className="w-full bg-container-background rounded-lg p-8 border-b-4">
          <div className="flex items-center justify-between">
            <h4 className="text-main-text text-xl font-bold">Password length</h4>
            <p className="text-main-text text-xl font-bold">{length}</p>
          </div>

          <div>
            <input
              type="range"
              min="1"
              max="16"
              className="w-full h-3 rounded-full bg-slider-background appearance-none cursor-pointer border-none outline-none mt-7 mb-6"
              step="1"
              value={length}
              onChange={(e) => {
                setlen(e.target.value);
              }}
            />
          </div>

          <div>
            <h4 className="text-main-text text-xl font-bold mb-4">Password Rules</h4>
            <div className="flex flex-wrap items-center mb-4">
              <div className="flex items-center mb-4 mr-4">
                <input type="checkbox" id="uppercase" className="mr-2 cursor-pointer" defaultChecked={upper} onChange={(e) => { setupper(e.target.checked); }} />
                <label htmlFor="uppercase" className="text-gray-800 text-lg">Includes Uppercase letters</label>
              </div>
              <div className="flex items-center mb-4 mr-4">
                <input type="checkbox" id="lowercase" className="mr-2 cursor-pointer" defaultChecked={lower} onChange={(e) => { setlower(e.target.checked); }} />
                <label htmlFor="lowercase" className="text-gray-800 text-lg">Includes Lowercase letters</label>
              </div>
              <div className="flex items-center mb-4 mr-4">
                <input type="checkbox" id="numbers" className="mr-2 cursor-pointer" defaultChecked={number} onChange={(e) => { setnumber(e.target.checked); }} />
                <label htmlFor="numbers" className="text-gray-800 text-lg">Includes Numbers</label>
              </div>
              <div className="flex items-center mb-4 mr-4">
                <input type="checkbox" id="symbols" className="mr-2 cursor-pointer" defaultChecked={symbol} onChange={(e) => { setsymbol(e.target.checked); }} />
                <label htmlFor="symbols" className="text-gray-800 text-lg">Includes Symbols</label>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between mt-7 mb-8'>
            <h4 className='text-main-text text-xl font-bold'> Strength</h4>
            {changeColor()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pass;
