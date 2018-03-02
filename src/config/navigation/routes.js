import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import { Easing, Animated, BackHandler } from 'react-native'
import { addListener } from '../../utils/redux'
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

// Anuncios
import ProfileMaq from '../../screens/anuncio/profileMaq'

//Chat
import Chat from '../../screens/mensagens/chat'


// Routes path
const _Main = StackNavigator(
    {
        // Login routes
        Start: { screen: Start },
        Login: { screen: Login },
        PasswordRecovery: { screen: PasswordRecovery },

        // Register routes
        Register_1: { screen: Register_1 },
        Register_2: { screen: Register_2 },
        Register_3: { screen: Register_3 },
        Register_4: { screen: Register_4 }

    }, {
        headerMode: 'none',
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
            }
        })
    }
)

export const _Routes = StackNavigator(
    {
        Start: { screen: Start },
        Main: { screen: _Main },
        TabRoutes: { screen: TabRoutes }, // Tabs
        ProfileMaq: { screen: ProfileMaq }, // Anuncios profile
        Chat: { screen: Chat } //Chat
    }, {
        headerMode: 'float',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 350,
                easing: Easing.out(Easing.poly(3)),
                timing: Animated.timing,
                useNativeDriver: true
            },
            screenInterpolator: sceneProps => {
                const { position, layout, scene, index, scenes } = sceneProps
                const toIndex = index
                const thisSceneIndex = scene.index
                const height = layout.initHeight
                const width = layout.initWidth

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
                    outputRange: [width, 0, 0]
                })

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [0.8, 1],
                })

                return { opacity, transform: [{ translateX }] }
            }
        })
    }

)

class AppWithNavigationState extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props
        if (nav.index === 0)
            return false

        dispatch(NavigationActions.back())
        return true
    }

    render() {
        const { dispatch, nav } = this.props
        return (
            <_Routes
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener
                })}
            />
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)