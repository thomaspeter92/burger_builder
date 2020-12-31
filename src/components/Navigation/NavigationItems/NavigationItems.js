import React from 'react';
import styles from './NavigationItems.css'

import NavItem from './NavItem/NavItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavItem link='/' active>Burger Builder</NavItem>
        <NavItem link='/'>Checkout</NavItem>

    </ul>
)

export default navigationItems  