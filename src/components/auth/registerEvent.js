import React, { useEffect, useState } from 'react' 
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import registerUser from '../../services/registerUser';

const RegisterEvent = () => {

    const [step,setStep] = useState(1)
    const [data,setData] = useState({})
    const prevStep = () => {
        setStep(step-1)
    }

    const callback = (params)=>{
        setData({...data,...params})
    }




    const callbackSubmit = (params)=>{
      var x = {...data,...params}
      setData({...data,...params})
      registerUser(x)

  }

    const nextStep = () => {
      console.log("executed")
      setStep(step+1)
    }

    useEffect(()=>{
      console.log(data)
    },[data])


    const eventLists = [
        {value: 'Strigrays League - Gaming Jam' , regFee : 200},
        {value : 'Battle Of The Ice - Gaming Tournment' , regFee : 200},
        {value : 'Zh3r0-Capture the Flag' , regFee : 150},
        {value : 'Code Wars - Coding Tournment' , regFee : 250},
        {value : 'Platonic' , regFee : 180},
        {value : 'Bidders Coding Camp' , regFee : 220},
        {value : 'BotBattleBash B3' ,regFee : 130},
        {value : 'ML-XLR8' , regFee : 100},
        {value : 'AI Escape Room' , regFee : 160},
        {value :'Colay' , regFee : 180},
        {value : 'Dare to be Different (Ideathon)' , regFee : 280},
        {value : 'Forensics Investigation Challenges' , regFee : 220},
        
      ];



    const show = () => {

        switch (step) {
            case 1: 
              return (
                <Step1 
                nextStep = {nextStep}
                handleChange={callback}
                values={data}
                />
              )
            case 2: 
              return (
                <Step2 
                nextStep = {nextStep}
                prevStep = {prevStep}
                handleChange={callback}
                values={data}
                />
              )
            case 3: 
              return (
                <Step3 
                    nextStep = {nextStep}
                    prevStep = {prevStep}
                    handleChanges={callbackSubmit}
                />
              )
            case 4:
              return (
                // <Success />
                <div></div>
            )
            // never forget the default case, otherwise VS code would be mad!
            default: 
                
               // do nothing
          }

        }
        return (
            <div>
                {show()}
            </div>
        );
    
}

export default RegisterEvent