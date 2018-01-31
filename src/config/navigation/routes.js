import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Login from '../../screens/login/login'
import Register from '../../screens/login/register'
import PasswordRecovery from '../../screens/login/passwordRecovery'
import Welcome from '../../screens/login/welcome'

export default class Routes extends Component {
    render() {
        return (
            <_Routes />
        )
    }
}

const _Routes = StackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    PasswordRecovery: { screen: PasswordRecovery },
    Welcome: { screen: Welcome }
})