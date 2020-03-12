import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    } 

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }
    } //handleSubmit end..

    handleChange = (e) => {
        const {name, value} =  e.target;
        this.setState({[name] : value })
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = "email"
                        type = "email"
                        value= {this.state.email}
                        handleChange = {this.handleChange}
                        label = "email"
                        required
                    />
                    {/* <label>Email</label> */}

                    <FormInput 
                        name = "password"
                        type = "password"
                        value= {this.state.password}
                        handleChange = {this.handleChange}
                        label = "password"
                        required
                    />
                    {/* <label>Password</label> */}

                    <div className = 'buttons'>
                        <CustomButton type = "submit">
                            Sign in 
                        </CustomButton>

                        <CustomButton onClick = { signInWithGoogle } isGoogleSignIn >
                        {' '} Sign in with Google {' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;