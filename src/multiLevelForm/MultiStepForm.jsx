import React, { useState } from 'react'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Review from './Review';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const[formData,setFormData] = useState({
        name:"",
        email:"",
        address:""
    })

    function nextStep(data){
        setFormData(prev => ({...prev,...data})),
        setStep(prev => prev + 1);
    }
  return (
    <div>
      {step === 1 && <StepOne onNext={nextStep}/>}
      {step === 2 && <StepTwo onNext={nextStep}/>}
      {step ===3 && <Review data={formData}/>}
    </div>
  )
}

export default MultiStepForm
