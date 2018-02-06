import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

//Login
import Start from '../../screens/login/start'
import Login from '../../screens/login/login'
import PasswordRecovery from '../../screens/login/passwordRecovery'
import Welcome from '../../screens/login/welcome'

// Register
import Register_1 from '../../screens/register/register_1'
import Register_2 from '../../screens/register/register_2'
import Register_3 from '../../screens/register/register_3'
import Register_4 from '../../screens/register/register_4'

// Anúncios
import Anuncios from '../../screens/anuncio/anuncios'


export default class Routes extends Component {
    render() {
        return (
            <_Routes />
        )
    }
}

// Routes path
const _Routes = StackNavigator({
    // Login routes
    Start: { screen: Start },
    Login: { screen: Login },
    PasswordRecovery: { screen: PasswordRecovery },
    Welcome: { screen: Welcome },

    // Register routes
    Register_1: { screen: Register_1 },
    Register_2: { screen: Register_2 },
    Register_3: { screen: Register_3 },
    Register_4: { screen: Register_4 },

    // Anúncios
    Anuncios: { screen: Anuncios },
})