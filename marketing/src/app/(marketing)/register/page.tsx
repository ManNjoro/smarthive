"use client";
import React, { useState } from 'react';
import './register.css';
import Image from 'next/image';
import Png from '@/public/sign-up.png';
import { auth } from '@/app/firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    dob: '',
    gender: '',
    username: '',
    email: '',
    passwd: '',
  });

  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, passwd } = formData;

    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
      console.log('User registered successfully');
      // Redirect to another page (e.g., upload data page)
      router.push('/upload'); // Change '/upload' to the desired path
    } catch (err) {
      setError(err.message);
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <fieldset>
            <div className="form-items">
              <legend>
                <Image src={Png} alt="sign-up" />
              </legend>
              <hr />

              {/* Full name */}
              <label htmlFor="fname">First name:</label> <br />
              <input 
                type="text" 
                id="fname" 
                name="fname" 
                placeholder="Son" 
                required 
                value={formData.fname}
                onChange={handleChange}
              /> <br />

              <label htmlFor="lname">Last name:</label> <br />
              <input 
                type="text" 
                id="lname" 
                name="lname" 
                placeholder="Goku" 
                required 
                value={formData.lname}
                onChange={handleChange}
              /> <br />

              {/* Date of Birth */}
              <label htmlFor="dob">Date of Birth:</label> <br />
              <input 
                type="date" 
                id="dob" 
                name="dob" 
                required 
                value={formData.dob}
                onChange={handleChange}
              /> <br />

              {/* Gender */}
              <div className="radio">
                <label htmlFor="gender">Gender:</label>&nbsp;&nbsp;
                <input 
                  type="radio" 
                  id="male" 
                  name="gender" 
                  value="Male" 
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>&nbsp;&nbsp;
                <input 
                  type="radio" 
                  id="female" 
                  name="gender" 
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label> <br />
              </div>

              {/* Username */}
              <label htmlFor="username">Username:</label> <br />
              <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Saiyan#1" 
                required 
                value={formData.username}
                onChange={handleChange}
              /> <br />

              {/* Email */}
              <label htmlFor="email">Email:</label> <br />
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="songoku123@gmail.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              /> <br />

              {/* Password */}
              <label htmlFor="passwd">Password:</label> <br />
              <input 
                type="password" 
                id="passwd" 
                name="passwd" 
                required 
                value={formData.passwd}
                onChange={handleChange}
              /> <br />

              <input type="submit" value="Submit" id="submit" />&nbsp;&nbsp;
              <input type="reset" value="Reset" id="reset" /> 

              <hr />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <p className="register">
                Already have an account? <a href="/login" target="_self">Login</a>
              </p>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
