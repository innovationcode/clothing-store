import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className = 'header'>
        <Link to = '/' className = 'logo-container'>
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link to = '/shop' className = "option">
                SHOP
            </Link>
            <Link to = '/shop' className = "option">
                CONTACT
            </Link>

            {
                currentUser ? (
                <div className = 'option' onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div> ) : (
                <Link to = '/signin' className = 'option'>SIGN IN</Link> )
            }
            <CartIcon />
        </div>

    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);