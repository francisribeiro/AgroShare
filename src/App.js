import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import AppWithNavigationState from './config/navigation/routes'
import reducers from './reducers'

export default class App extends Component {

  constructor(props) {
    super(props)
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