const INITIAL_STATE = {
    foto: 'false'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'my_foto':
            return { foto: action.payload }
        default:
            return state
    }
}