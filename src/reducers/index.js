import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { firebase } from '../config/firebase'

import { _Routes } from '../config/navigation/routes'

import AutenticacaoReducer from './AutenticacaoReducer'
import CadastroUsuarioReducer from './CadastroUsuarioReducer'
import AppReducer from './AppReducer'
import CadastroAnuncioReducer from './CadastroAnuncioReducer'
import AnunciosListaReducer from './AnunciosListaReducer'
import CadastroAluguelReducer from './CadastroAluguelReducer'

const initialNavState = null

// firebase.auth.onAuthStateChanged(function (user) {
if (false)
    initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Start' }))
else
    initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Start' }))
// })

function nav(state = initialNavState, action) {
    let nextState = _Routes.router.getStateForAction(action, state)

    return nextState || state
}

export default combineReducers({
    nav,
    AppReducer,
    AutenticacaoReducer,
    CadastroUsuarioReducer,
    CadastroAnuncioReducer,
    AnunciosListaReducer,
    CadastroAluguelReducer,
})