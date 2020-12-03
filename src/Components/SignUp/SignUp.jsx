import React, { useState } from 'react';
import './SignUp.css';

import { useHistory } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";

const SignUp = (props) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [repassword, setRePassword] = useState('');
     const [err, setErr] = useState('');
     const { signup } = useAuth();
     const history = useHistory();

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (password !== repassword) {
            return setErr("Passwords do not match!");
          }
          try {
            setErr("");
            await signup(email, password);
            history.push("/");
          } catch {
            setErr("Failed to sign up. Please try again!");
          }
     }

     return (
          <div className="SignUp">
               <h1 className="SignUpHeading">
                    Create a new account!
               </h1>
               <form className="SignUpForm" onSubmit={ handleSubmit }>
                    {
                         err &&
                         <div className="Alert">
                              { err }
                         </div>
                    }
                    <input 
                         type="email" 
                         className="InputFeild" 
                         id="email"
                         name="email"
                         placeholder="Email Address"
                         value={ email }
                         onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" className="InputLabel">
                         Email Address
                    </label>
                    <input 
                         type="password" 
                         className="InputFeild" 
                         id="password"
                         name="password"
                         placeholder="Password"
                         value={ password }
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" className="InputLabel">
                         Password
                    </label>
                    <input 
                         type="password" 
                         className="InputFeild" 
                         id="repassword"
                         name="repassword"
                         placeholder="Re-Enter Password"
                         value={ repassword }
                         onChange={(e) => setRePassword(e.target.value)}
                    />
                    <label htmlFor="repassword" className="InputLabel">
                         Re-Enter Password
                    </label>
                    <button type="submit" className="SignUpBtn btn">
                         Sign up
                    </button>
               </form>
          </div>
     )
}

export default SignUp;