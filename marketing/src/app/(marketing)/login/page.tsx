"use client";

import React, { useState } from 'react';
import './login.css';
import Png from '@/public/login.png'; 
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from 'firebase/auth';

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


 const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, username, password);
      // Handle successful login (e.g., redirect to dashboard)
      console.log('Login successful');
      router.push('/upload');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed. Please check your credentials.')
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <fieldset>
            <div className="form-items">
              <legend>
                <Image src={Png} alt="login" />
              </legend>
              {/* Username */}
              <label htmlFor="username">Username:</label> <br />
              <input 
                type="email" 
                id="username" 
                name="username" 
                placeholder="Saiyan#1" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              /> <br />
              {/* Password */}
              <label htmlFor="passwd">Password:</label> <br />
              <input 
                type="password" 
                id="passwd" 
                name="passwd" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              /> <br />

              <input type="submit" value="Submit" id="submit" />&nbsp;&nbsp; {/* Submit */}
              <input type="reset" value="Reset" id="reset" />  {/* Reset */}

              {/* Sign-up */}
              <hr />
              <p className="login">
                Don't have an account? <a href="./register" target="_self">Sign-up</a>
              </p>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Page;