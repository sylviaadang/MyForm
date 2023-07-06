import react from 'react';
import React, {useState} from 'react';

const MyForm = () => {

  const[formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email: "",
    password: "",
    confirmPassword: ""
  })


  const submitForm = e => {
    e.preventDefault()

    console.log(formData)
  }


  const handleChange = e => {
    const {name, value} = e.target
    setFormData( (currentData) => ({
      ...currentData, [name] : value
    }))
  }


  const formStyle = {
    width: 500
  }



  return (
    <form style={formStyle}>
      <fieldset>
        <legend>Sign Up!</legend>

        <label>First Name: </label>
        <input name='firstName' onChange={handleChange} value = {formData.firstName} type='text'/>
        <br/>
        <label>Last Name: </label>
        <input  name='lastName' onChange={handleChange}  value = {formData.lastName} type='text'/>
        <br/>
        <label>Email: </label>
        <input  name='email' onChange={handleChange} value = {formData.email} type='text'/>
        <br/>
        <label>Password: </label>
        <input  name='password' onChange={handleChange} value = {formData.password} type='password'/>
        <br/>
        <label>Confirm Password: </label>
        <input  name='password' onChange={handleChange}  value = {formData.confirmPassword} type='password'/>

      </fieldset>

      <p>First Name: {formData.firstName} </p>
      <p>Last Name: {formData.lastName} </p>
      <p>Email: {formData.email} </p>
      <p>Password: {formData.password} </p>
      <p>Confirm Password: {formData.confirmPassword} </p>
    </form>
  )

}

export default MyForm
