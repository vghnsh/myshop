import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styled';

const Header = ({currentUser,hidden}) =>(
    <HeaderContainer className='header'>
        <LogoContainer  to ='/'>
            <Logo className='logo' ></Logo>
        
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP 
            </OptionLink>
            <OptionLink to='/shop'> 
                CONTACT 
            </OptionLink>
        {
            currentUser ?
            <OptionLink as="div" onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
            :
            (<OptionLink to='/Sign'>SIGN IN</OptionLink>
        
            )}
            <CartIcon/>

        </OptionsContainer>{ hidden ? null :
        <CartDropDown/>
        }
    </HeaderContainer>
);

const mapStateToProps= createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

