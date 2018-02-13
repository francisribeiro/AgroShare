import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Easing, Animated } from 'react-native'

// Tabs
import TabRoutes from './tabRoutes'

// Login
import Start from '../../screens/login/start'
import Login from '../../screens/login/login'
import PasswordRecovery from '../../screens/login/passwordRecovery'

// Register
import Register_1 from '../../screens/register/register_1'
import Register_2 from '../../screens/register/register_2'
import Register_3 from '../../screens/register/register_3'
import Register_4 from '../../screens/register/register_4'

export default class Routes extends Component {
    render() {
        return (
            <_Routes />
        )
    }
}

// Routes path
const _Routes = StackNavigator(
    {
        // Login routes
        Start: { screen: Start },
        Login: { screen: Login },
        PasswordRecovery: { screen: PasswordRecovery },

        // Register routes
        Register_1: { screen: Register_1 },
        Register_2: { screen: Register_2 },
        Register_3: { screen: Register_3 },
        Register_4: { screen: Register_4 },

        // Tabs
        Tab: { screen: TabRoutes },
    }, {
        transitionConfig: () => ({
            transitionSpec: {
                duration: 550,
                easing: Easing.out(Easing.poly(3)),
                timing: Animated.timing,
                useNativeDriver: true
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps

                const thisSceneIndex = scene.index
                const width = layout.initWidth

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                })

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [0.8, 1],
                })

                return { opacity, transform: [{ translateX }] }
            },
        }),
    }
)