import React from 'react'
import { useState } from "react"
import axios from 'axios'


const SignUp = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumner] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('')
  const [gst, setGst] = useState('')
  const [pan, setPan] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [profileImg, setProfileImg] = useState( )
  const [gstImg, setGstImg] = useState( )
  const [panImg, setPanImg] = useState( )


  function saveUser() {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('password', password);
    formData.append('userType', userType);
    formData.append('gst', gst);
    formData.append('pan', pan);
    formData.append('addressLine1', addressLine1);
    formData.append('addressLine2', addressLine2);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('pincode', pincode);
    formData.append('profileImg', profileImg);
    formData.append('gstImg', gstImg);
    formData.append('panImg', panImg);

    console.warn({ firstName, lastName, email, mobileNumber, password, userType, gst, pan, addressLine1, addressLine2, state, city, pincode })

    // let data = { firstName, lastName, email, mobileNumber, password, userType, gst, pan, addressLine1, addressLine2, state, city, pincode }

    axios.post('https://riyo.onrender.com/riyologistics/signup', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleProfileImgChange(event) {
    setProfileImg(event.target.files[0]);
  }

  function handleGstImgChange(event) {
    setGstImg(event.target.files[0]);
  }

  function handlePanImgChange(event) {
    setPanImg(event.target.files[0]);
  }

  return (
    <div>
      <h1>SIGN UP</h1> <br />

      <label htmlFor="name">First Name :- &nbsp; </label>
      <input type="text" value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        name='firstName' placeholder='First Name' />  <br /> <br />

      <label htmlFor="name">Last Name :-  &nbsp; </label>
      <input type="text" value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        name='lastName' placeholder='Last Name' />  <br /> <br />

      <label htmlFor="name">Email id :-  &nbsp; </label>
      <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        name='email' placeholder='Email' />  <br /> <br />

      <label htmlFor="name">Mobile Number :-  &nbsp; </label>
      <input type="text" value={mobileNumber}
        onChange={(e) => setMobileNumner(e.target.value)}
        name='mobileNumber' placeholder='Mobile Number' />  <br /> <br />

      <label htmlFor="name">Password :-  &nbsp; </label>
      <input type="text" value={password}
        onChange={(e) => setPassword(e.target.value)}
        name='password' placeholder='Password' />  <br /> <br />

      <label htmlFor="name">User Type :-  &nbsp; </label>
      <input type="text" list="userTypeOptions" value={userType}
        onChange={(e) => setUserType(e.target.value)}
        name='userType' placeholder='User Type' />
      <datalist id="userTypeOptions">
        <option value="trader" />
        <option value="manufacturer" />
        <option value="transportCompany" />
      </datalist>
      <br /> <br />

      <label htmlFor="name">GST No. :-  &nbsp; </label>
      <input type="text" value={gst}
        onChange={(e) => setGst(e.target.value)}
        name='gst' placeholder='GST' />  <br /> <br />

      <label htmlFor="name"> PanCard No. :-  &nbsp; </label>
      <input type="text" value={pan}
        onChange={(e) => setPan(e.target.value)}
        name='pan' placeholder='PAN' />  <br /> <br />

      <label htmlFor="address">Address Line 1 :- </label>
      <textarea type="text-box" value={addressLine1}
        onChange={(e) => setAddressLine1(e.target.value)}
        name='addressLine1' placeholder='Address Line 1'></textarea>
      <br /> <br />

      <label htmlFor="address">Address Line 2 :- </label>
      <textarea type="text-box" value={addressLine2}
        onChange={(e) => setAddressLine2(e.target.value)}
        name='addressLine2' placeholder='Address Line 2'></textarea>
      <br /> <br />
      <label htmlFor="image">State :-  &nbsp; </label>
      <input type="text" value={state}
        onChange={(e) => setState(e.target.value)}
        name='state' placeholder='State' />  <br /> <br />

      <label htmlFor="name">City :-  &nbsp; </label>
      <input type="text" value={city}
        onChange={(e) => setCity(e.target.value)}
        name='city' placeholder='City' />  <br /> <br />

      <label htmlFor="name">Pin Code :-  &nbsp; </label>
      <input type="text" value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        name='pincode' placeholder='Pin Code' />  <br /> <br />


      <label htmlFor="image">Profile Image:-  &nbsp; </label>
      <input type="file" 
        onChange={handleProfileImgChange} name='profileImg' />  <br /> <br />

      <label htmlFor="image">GST Image :-  &nbsp; </label>
      <input type="file"
        onChange={handleGstImgChange} name='gstImg' /> <br /> <br />

      <label htmlFor="image">PAN Image :-  &nbsp; </label>
      <input type="file" 
        onChange={handlePanImgChange} name='panImg' />  <br /> <br />

      <button onClick={saveUser} >Sign Up</button>

    </div>
  )
}

export default SignUp

