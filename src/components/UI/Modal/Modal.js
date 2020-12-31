import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' :'0',
        }}
        className='Modal'>
            {props.children}
        </div> 
    </Aux>  
)

export default modal