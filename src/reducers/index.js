import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

import { _Routes } from '../config/navigation/routes'

import AutenticacaoReducer from './AutenticacaoReducer'
import CadastroUsuarioReducer from './CadastroUsuarioReducer'

// const initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Start' }))
const initialNavState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Start' }))

function nav(state = initialNavState, action) {
    let nextState = _Routes.router.getStateForAction(action, state)

    return nextState || state
}

export default combineReducers({
    nav,
    AutenticacaoReducer,
    CadastroUsuarioReducer,
})