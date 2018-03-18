const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'alugueis_usuario_logado':
            return action.payload
        default:
            return state
    }
}