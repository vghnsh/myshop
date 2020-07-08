import React from 'react';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser:null
    };
  }

  unsubscibeFromAuth =null;

  componentDidMount(){
    this.unsubscibeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }


  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/Shop' component={ ShopPage }/>
          <Route  path='/Sign' component={ SignInAndSignUpPage }/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
