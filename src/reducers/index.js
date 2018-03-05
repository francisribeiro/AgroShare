import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { firebase } from '../config/firebase'

import { _Routes } from '../config/navigation/routes'

import AutenticacaoReducer from './AutenticacaoReducer'
import CadastroUsuarioReducer from './CadastroUsuarioReducer'
import AppReducer from './AppReducer'

const initialNavState = null

// firebase.auth.onAuthStateChanged(function (user) {
    if (true)
        initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Anuncios' }))
    else
        initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Anuncios' }))
// })

function nav(state = initialNavState, action) {
    let nextState = _Routes.router.getStateForAction(action, state)

    return nextState || state
}

export default combineReducers({
    nav,
    AutenticacaoReducer,
    CadastroUsuarioReducer,
    AppReducer
})