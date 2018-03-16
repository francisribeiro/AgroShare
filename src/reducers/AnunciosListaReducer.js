const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'anuncios_usuario_logado':
            return action.payload
        case 'todos_anuncios':
            return action.payload
        default:
            return state
    }
}