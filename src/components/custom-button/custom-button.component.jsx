import React from 'react';
import './custom-button.style.scss';

const CustomButton= ({
    children,
    checkout,
    inverted,
    isGoogleSignIn,
     ...otherProps
    })=>(
    <button className={
        `${isGoogleSignIn ? 'google-sign-in':' '} 
         ${checkout ? 'checkout':' '} 
         ${inverted ? 'inverted': ' '} 
         custom-button `} 
              
    {...otherProps}>
        {children}
    </button>
);

export default CustomButton;