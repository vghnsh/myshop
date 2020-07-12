import React from 'react';
import { Switch,Route } from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

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
          

          console.log(this.state);
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
          <Route  path='/Sign' component={ SignInAndSignUpPage }/>
        </Switch>
        
      </div>
    );
  }
  
}

const mapDispatchToProps= dispach =>({
  setCurrentUser : user =>dispach(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps)(App);
