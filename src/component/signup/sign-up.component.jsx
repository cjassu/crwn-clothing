import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,createUserProfileDocument} from '../../component/firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        };
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmpassword} = this.state;
        if(password != confirmpassword){
            alert('password dont match');
            return;

        }
        try{
            const { user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
            email:'',
            password:'',
            confirmpassword:''
            });
        }catch(error){
            console.error(error);
        }
    };

    handleChange = event => {
        const{name,value} = event.target;
        this.setState({[name]:value});
    };

    render() {
        const {displayName,email,password,confirmpassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                     ></FormInput>
                     <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                     ></FormInput>
                     <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                     ></FormInput>
                     <FormInput
                    type='password'
                    name='confirmpassword'
                    value={confirmpassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                     ></FormInput>
                     <CustomButton type='submit'>
                        Sign Up
                     </CustomButton>

                </form>

            </div>
        );
    }
}
export default SignUp;