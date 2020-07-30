import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StirpeCheckoutButton =({price})=>{
    
    const publishablekey= 'pk_test_51HAAn1HnEQRqgln0ykPTebveVdKWZXjzYyrEDftxDcuK229v8oZesFYJ82FmQxTexGpjKf4HSKppkPGdOi19Df2N00DJJTjEJM';

    const onToken= token => {
        console.log(token);
        alert('Succsesful');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='My Shop LTD.'
            billingAddress
            shippingAddress
            image='https://image.flaticon.com/icons/svg/2111/2111823.svg'
            description={`Your total is ₹${price}`}
            amount={price}
            panelLabel='Paisaa Bharo'
            token={ onToken }
            stripeKey={publishablekey}
        ></StripeCheckout>
    );
};

export default StirpeCheckoutButton;