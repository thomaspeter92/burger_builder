import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css'



const checkoutSummary = (props) => {


console.log(props)

    return (

        <div className={styles.CheckoutSummary}>
            <h1>Hope it tastes goood!</h1>
            <div style={{width: '100%',  margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.onCheckoutCanceled}>Cancel</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContiued}>Continue</Button>

        </div>

    )
}

export default checkoutSummary;