import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
//this could be functional component. doesnt have to be a class because we check for the update within the modal component. 
    componentDidUpdate() {
        console.log('order summary will update');
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}: </span> 
                        {this.props.ingredients[igKey]}
                    </li> )
        })
        return (

            <Aux>
            <h3>Your Order</h3>
            <p>One burger with: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>${this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>


        )
    }




}

export default OrderSummary;