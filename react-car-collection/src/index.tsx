import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, CarCollection } from './components'
import './style.css';
// import { firebaseConfig } from './firebaseConfig'
import { Provider } from 'react-redux';
import { store } from './redux/store'
// import { FirebaseAppProvider } from 'reactfire';


let myTitle = "Car Collection"

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}> */}
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle} />
        </Route> 
        <Route path='/CarCollection'>
          <CarCollection></CarCollection>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>

      </Switch>
    </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
