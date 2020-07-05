import React from 'react';
import { Switch,Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const Hotsp = (props) => {
  console.log(props);
  return(
  <div>
    <h1>OP bolte</h1>

  </div>
  );
};

function App() {
  return (
    <div >
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/hats' component={Hotsp}/>
      </Switch>
      
    </div>
  );
}

export default App;
