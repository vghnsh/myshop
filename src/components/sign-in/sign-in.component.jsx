import React from 'react';
import './sign-in.style.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js';
class SignIn extends React.Component{
    constructor(props){
         // eslint-disable-next-line
        super(props);{
            this.state={
                email:'',
                password:''

            }
        }
    }

    handleSubmit = async event =>{
        event.preventdefault();
        const {email,password}=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
   
        }catch(error){
            console.log(error);
        }

         }

    handleChange =event =>{
        const { value,name}=event.target;
        this.setState({
            [name]:value
        })

    }

    render(){
        return(
            <div className='sign-in'>
                <div>
                    <h2>I already have an account</h2>
                        <span>Sign in with Email and password</span>
                            <form onSubmit={this.handleSubmit}>
                                <FormInput 
                                name="email" 
                                label="email"
                                value={this.state.email}
                                handleChange={this.handleChange}
                                > 
                                </FormInput>
                                <FormInput
                                    name="password"
                                    type="password"
                                    label="current-password"
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                    autoComplete="on"
                                    required
                                >
                                </FormInput>
                                
                                <CustomButton type='submit' > Sign</CustomButton>
                            
                            </form>
                </div>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign with Google 
                    </CustomButton>
            </div>
        )
    }
}
export default SignIn;