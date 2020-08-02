import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.componrnt';

import './checkout.style.scss';
import StirpeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({CartItems,total}) =>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
                    Product
                </span>

            </div>
            <div className='header-block'>
                <span>
                    Name
                </span>

            </div>
            <div className='header-block'>
                <span>
                    Quantity
                </span>

            </div>
            <div className='header-block'>
                <span>
                    Price
                </span>

            </div>
            <div className='header-block'>
                <span>
                    Remove
                </span>

            </div>

        </div>
        {
            CartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className='total'> TOTAL : ₹{total} </div>
        <div className='test-warning'>
            Please Use the following test Credit card Number
            <br />
            4242 4242 4242 4242 Exp: 01/22  - CVV:123
        </div>
        <StirpeCheckoutButton price={total}></StirpeCheckoutButton>
    </div>
)

const mapStateToProps= createStructuredSelector({
   CartItems: selectCartItems,
   total: selectCartTotal

});

export default connect(
    mapStateToProps
)(CheckoutPage);