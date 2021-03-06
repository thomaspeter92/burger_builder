import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },   
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)

         this.setState({loading: true});
        //alert('You Continue!')
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Tomas Peter',
                address: {
                    street: 'Fairway',
                    zipCode: 'm27',
                    country: 'United Kingdom'
                }
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false});
            this.props.history.push('/')
        }).catch(error => {
            this.setState({loading:false})
        })
    }

    render() {
        let form = (
                <form>
                    <input className={styles.Input} type="text" name='name' placeholder="your name"/>
                    <input className={styles.Input} type="email" name="email" placeholder="email"/>
                    <input className={styles.Input} type="text" name="street" placeholder="street"/>
                    <input className={styles.Input} type="text" name="postal" placeholder="postal Code"/>
                    <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData;