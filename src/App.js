import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutPage from './pages/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component{


  unsubscibeFromAuth =null;

  componentDidMount(){

    const {setCurrentUser } =this.props;

    this.unsubscibeFromAuth=auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
        
      }
      else
      {
        setCurrentUser (userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }


  render(){
    return (
      <div >
        <Header/>
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/Shop' component={ ShopPage }/>
          <Route  exact path='/checkout' component={CheckoutPage}/>
         
          <Route  path='/Sign' render={()=>this.props.currentUser ?
          (<Redirect to='/'/> ):(< SignInAndSignUpPage/>) }
          />
          </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps =createStructuredSelector({
  currentUser : selectCurrentUser
});

const mapDispatchToProps= dispach =>({
  setCurrentUser : user =>dispach(setCurrentUser(user))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
