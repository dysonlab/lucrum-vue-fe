const mutations = {
    SET_TOKEN(state, token){
        state.token = token
    },
    SET_ERROR_MODAL(state, isOpen){
        state.errorModalIsOpen = isOpen
    },
    SET_ERROR_MESSAGE(state, message){
        state.errorMessage = message
    },
    
}

export default mutations;