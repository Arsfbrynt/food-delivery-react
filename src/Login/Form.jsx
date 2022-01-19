import React, { useState } from 'react';
import Signup from "./Signup";
import Succes from "./Succes";
import './login.css'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div>   
        { !formIsSubmitted ?  <Signup submitForm={submitForm}/> : <Succes/>  }

        </div>
    );
};


export default Form
