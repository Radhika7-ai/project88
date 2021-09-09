import * as React from 'react' ;
import {createSwitchNavigator , createAppCointainer} from "react-navigation" ;

import LoginScreen from "./screens/loginScreen" ;
import LoadingScreen from "./screens/loadingScreen" ;
import dashboardScreen from './screens/dashboard';

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen ,
  LoginScreen:LoginScreen ,
  dashboardScreen:dashboardScreen 
})

import * as firebase from "firebase" ;
import { firebaseConfig } from "./config.js" ;

if ( !firebase.apps.length ) {
  firebase.initializeApp(firebaseConfig) ;
} else {
  firebase.app() ;
}

const AppNavigator = createAppCointainer(AppSwitvhNavigator)

export default function App() {
  return(
    <AppNavigator />
  )
}