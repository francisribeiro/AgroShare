import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Routes from './config/navigation/routes'

export default class App extends Component {
  render() {
    return (
      <Routes />
    )
  }
}