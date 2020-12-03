import React, { useState } from 'react';
import './SignIn.css';

import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInWithEmail, signInWithGoogle } from '../../Redux/actions';

const SignIn = (props) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const history = useHistory();

     const handleSubmit = async (e) => {
          e.preventDefault();
          await props.signInWithEmail(email, password);
          history.push('/');
     }

     const handleGoogleSignIn = async () => {
          await props.signInWithGoogle();
          history.push('/');
     }
     return (
          <div className="SignIn">
               <h1 className="SignInHeading">
                    Welcome Back!
               </h1>
               <form className="SignInForm" onSubmit={ handleSubmit }>
                    {
                         props.err &&
                         <div className="Alert">
                              { props.err }
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
                    <button type="submit" className="SignInBtn btn">
                         Sign in
                    </button>
               </form>
               <p className="sub">
                    Or, Sign in using Google
               </p>
               <div className="GoogleIcon" onClick={ handleGoogleSignIn }>
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         className="gmailSVG"
                         viewBox="0 0 48 48"
                         width="32px"
                         height="32px"
                    >
                         <path
                         fill="#4caf50"
                         d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                         />
                         <path
                         fill="#1e88e5"
                         d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                         />
                         <polygon
                         fill="#e53935"
                         points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                         />
                         <path
                         fill="#c62828"
                         d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                         />
                         <path
                         fill="#fbc02d"
                         d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                         />
                    </svg>
               </div>
          </div>
     )
}

const mapStateWithProps = (state) => {
     return {
          isLoggedIn: state.isLoggedIn,
          err: state.error,
     }
}

const mapActionWithProps = {
     signInWithEmail,
     signInWithGoogle,
}

export default connect(mapStateWithProps, mapActionWithProps) (SignIn);