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

  const [firstErr, setFirstErr] = useState("")
  const [secondErr, setSecondErr] = useState("")
  const [thirdErr, setThirdErr] = useState("")
  const [fourthErr, setFourthErr] = useState("")
  const [fifthErr, setFifthErr] = useState("")



  const submitForm = e => {
    e.preventDefault()

    console.log(formData)
  }



  const handleChange = e => {
    const {name, value} = e.target
    // setFormData( (currentData) => ({
    //   ...currentData, [name] : value
    // }))

    setFormData({...formData, [name]: value})

    if (name == 'firstName' && value.length < 2) {
      setFirstErr("First Name must be at least 2 characters")
    } else {
      setFirstErr("")
    }
    if (name == 'lastName' && value.length < 2) {
      setSecondErr("Last Name must be at least 2 characters")
    } else {
      setSecondErr("")
    }

    if (name == 'email' && value.length < 2) {
      setThirdErr("Email must be at least 2 characters")
    } else {
      setThirdErr("")
    }

    if (name == 'password' && value.length < 8) {
      setFourthErr("Password must be at least 8 characters")
    } else {
      setFourthErr("")
    }

    if ('password' != 'confirmPassword') {
      setFifthErr("Passwords do not match")
    }
  }


  const formStyle = {
    width: 500
  }

  const errStyle = {
    margin: 0,
    padding: 0,
    color: 'red',
    fontweight: "bold"
  }


  return (
    <form style={formStyle}>
      <fieldset>
        <legend>Sign Up!</legend>

        <p style={errStyle}>{firstErr}</p>
        <label>First Name: </label>
        <input name='firstName' onChange={handleChange} value = {formData.firstName} type='text'/>
        <br/>
        <p style={errStyle} >{secondErr}</p>
        <label>Last Name: </label>
        <input  name='lastName' onChange={handleChange}  value = {formData.lastName} type='text'/>
        <br/>
        <p style={errStyle} >{thirdErr}</p>
        <label>Email: </label>
        <input  name='email' onChange={handleChange} value = {formData.email} type='text'/>
        <br/>
        <p style={errStyle} >{fourthErr}</p>
        <label>Password: </label>
        <input  name='password' onChange={handleChange} value = {formData.password} type='password'/>
        <br/>
        <p style={errStyle} >{fifthErr}</p>
        <label>Confirm Password: </label>
        <input  name='password' onChange={handleChange}  value = {formData.confirmPassword} type='password'/>
        <br/>
        <button>Register</button>


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
