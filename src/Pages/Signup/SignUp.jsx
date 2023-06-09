import React, { useContext, useEffect, useState } from 'react';
import "./SignUp.css"
import signUpSvg from "../../assets/signUpImage/My project.png"
import signUpArrow from "../../assets/signUpImage/dbl-arrow.png"
import AuthProvider, { Authcontext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [passwordotherError, setPasswordotherError] = useState('');
    const [passwordError, setPasswordError] = useState('');
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
        const confirmPassword = form.confirmPassword.value;
        const photoURL = form.photoURL.value;

        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setPasswordotherError('Password should contain at least one capital letter');
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('Password should contain at least one special character');
            return;
        }

        setPasswordError('');

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

        setEmailError("");
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
                <form className='signUpForm' onSubmit={handleSignUp} action="" method="">
                    <div className="form-containers slideRight-animation">
                        <h1 className="form-header">
                            Get started
                        </h1>
                        <div className="input-container">
                            <label htmlFor="name"></label>
                            <input className="inputs" type="text" name="name" id="name" required />
                            <span className="lebelName">
                                Name
                            </span>
                        </div>
                        <div className="input-container">
                            <label htmlFor="mail"></label>
                            <input className="inputs" type="email" name="email" id="mail" required />
                            <span className="lebelName">
                                E-mail
                            </span>
                            <div className="error">{emailError}</div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="user-password"></label>
                            <input type="password" name="password" id="user-password" className="user-password inputs" required />
                            <span className="lebelName">Password</span>
                            <div className='error'>{passwordotherError}</div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="confirm-password"></label>
                            <input type="password" name="confirmPassword" id="confirm-password" className="user-password inputs" required />
                            <span className="lebelName">Confirm Password</span>
                            <div className="error">{passwordError}</div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="PhotoURL"></label>
                            <input type="text" className="inputs" name="photoURL" id="PhotoURL" required />
                            <span className="lebelName">PhotoURL</span>
                        </div>
                        <div id="btm">
                            <input type="submit" value="Create Account" className="submit-btn" />
                            <p className="btm-text">
                                Already have an account..? <Link to='/login' className="btm-text-highlighted">  Log in</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default SignUp;

