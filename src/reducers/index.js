import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { _Routes } from '../config/navigation/routes'

import AutenticacaoReducer from './AutenticacaoReducer'

const initialNavState = _Routes.router.getStateForAction(_Routes.router.getActionForPathAndParams('Start'))

function nav(state = initialNavState, action) {
    let nextState

    switch (action.type) {
        case 'Login':
            nextState = _Routes.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state)
            break
        default:
            nextState = _Routes.router.getStateForAction(action, state);
            break
    }

    return nextState || state;
}

export default combineReducers({
    nav,
    AutenticacaoReducer
})