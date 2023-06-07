import React, { useContext, useEffect, useState } from 'react';
import "./SignUp.css"
import signUpSvg from "../../assets/signUpImage/My project.png"
import signUpArrow from "../../assets/signUpImage/dbl-arrow.png"
import AuthProvider, { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const { createUser, updateUserProfile } = useContext(Authcontext);
    const [formVisible, setFormVisible] = useState(false);
  
    useEffect(() => {
      setFormVisible(true);
    }, []);
  
    const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photoURL.value;
  
      if (password.length < 6) {
        setPassword('Password should be at least 6 characters long');
        return;
      }
      setPassword('');
  
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(name, photoURL);
          form.reset();
          Swal.fire({
            icon: 'success',
            title: 'Account Created',
            text: 'Your account has been created successfully!',
          });
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setEmailError('Email is already in use');
          }
          console.log(error);
        });
    };
    return (
        <div className='root'>
            <main className="card-container slideUp-animation">
                <div className="image-container">
                    <h1 className="company">Basket <sup>&trade;</sup></h1>
                    <img src={signUpSvg} className="illustration" alt="" />
                    <p className="quote">Sign up today to get exciting offers..!</p>
                    <a href="#btm" className="mobile-btm-nav">
                        <img src={signUpArrow} alt="" />
                    </a>
                </div>
                <form onSubmit={handleSignUp} action="" method="">
                    <div className="form-container slideRight-animation">

                        <h1 className="form-header">
                            Get started
                        </h1>
                        <div className="input-container">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" required />
                            <span className = "lebelName">
                                Name
                            </span>
                        </div>

                        <div className="input-container">
                            <label htmlFor="photo-url"></label>
                            <input type="text" name="photoURL" id="photo-url" required />
                            <span className = "lebelName">
                                Photo URL
                            </span>
                        </div>

                        <div className="input-container">
                            <label htmlFor="mail">
                            </label>
                            <input type="email" name="email" id="mail" required />
                            <span className = "lebelName">
                                E-mail
                            </span>
                            <div className="error">{emailError}</div>
                        </div>

                        <div className="input-container">
                            <label htmlFor="user-password"></label>
                            <input type="password" name="password" id="user-password" className="user-password" required />
                            <span className = "lebelName">Password</span>
                            <div className="error">{password}</div>
                        </div>

                        <div id="btm">
                            <button type="submit" className="submit-btn">Create Account</button>
                            <p className="btm-text">
                                Already have an account..? <span className="btm-text-highlighted">  Log in</span>
                            </p>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default SignUp;