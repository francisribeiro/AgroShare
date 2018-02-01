import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

//Login
import Login from '../../screens/login/login'
import Register from '../../screens/login/register'
import PasswordRecovery from '../../screens/login/passwordRecovery'
import Welcome from '../../screens/login/welcome'

//Home
import Home from '../../screens/home/home'


export default class Routes extends Component {
    render() {
        return (
            <_Routes />
        )
    }
}

const _Routes = StackNavigator({
    // Login routes
    Login: { screen: Login },
    Register: { screen: Register },
    PasswordRecovery: { screen: PasswordRecovery },
    Welcome: { screen: Welcome },

    //Home routes
    Home: { screen: Home }
})