const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'LISTA_HISTORICO_USUARIO':
            return action.payload
        default:
            return state;
    }
}