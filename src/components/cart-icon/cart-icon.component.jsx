import React from 'react';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon =({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className='item-count'>{itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});

const mapStateToProps=({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (accumalatedQunatity,cartItem)=>
    accumalatedQunatity + cartItem.quantity,
    0
    )
});

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);