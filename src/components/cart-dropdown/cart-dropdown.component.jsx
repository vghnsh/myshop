import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import  {selectCartItems} from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden} from '../../redux/cart/cart.action';


import './cart-dropdown.style.scss';

const CartDropDown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ? 
            cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
                :
                <span className="empty-message">
                    Cart Is Empty
                </span>
            }
        </div>
            <CustomButton checkout onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}>
                Go To CheckOut</CustomButton>
        
    </div>
);

const mapStateToProps= createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect
    (mapStateToProps)
    ( CartDropDown)
    );