import React from 'react';

import styles from './NavItem.css'
import { checkPropTypes } from 'prop-types';

const navItem = (props) => (

    <li className='NavItem'>
        <a href={props.link} 
        className={ props.active ? 'active' : null}>
            {props.children}
        </a>
    </li>

)

export default navItem