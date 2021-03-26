import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route} from 'react-router-dom'


class App extends Component{
  state= {
    show: true
  }

  // componentWillMount(){
  //   setTimeout(() => {
  //     this.setState({show:false})
  //   }, 5000);
  // }


  render() {
    return (
      <div>
        <Layout>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
