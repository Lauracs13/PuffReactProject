import React, { useState } from 'react'
import validator from "validator";
import "./EmailValidation.css";

export default function EmailValidation() {

    const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Email válido :)");
    } else {
      setEmailError("Email inválido");
    }
  };
  return (
    <div className='EmailValidation'>
        <input
          placeholder="Ingresa tu email"
          type="text"
          id="userEmail"
          onChange={(e) => validateEmail(e)}
        ></input>{" "}
        <br/>
        <span className='alertMessage'>
          {emailError}
        </span>
    </div>
  )
}
