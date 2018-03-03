import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import AppWithNavigationState from './config/navigation/routes'
import reducers from './reducers'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDaVLZRM0zxMyZike9vqWWtOLrD2hDIDsE",
      authDomain: "agroshare-17942.firebaseapp.com",
      databaseURL: "https://agroshare-17942.firebaseio.com",
      projectId: "agroshare-17942",
      storageBucket: "agroshare-17942.appspot.com",
      messagingSenderId: "121465352697"
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Root>
          <AppWithNavigationState />
        </Root>
      </Provider>
    )
  }
}