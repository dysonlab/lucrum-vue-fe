import { LucrumAPI } from "@/api"

const api = new LucrumAPI();

const actions = {
    async LOGIN({ dispatch, commit }, payload) {
        api.login(payload)
            .then((response)=>{
                const token = response.data.token;
                commit("SET_TOKEN", token);
            })
            .catch((error)=>{
                console.log(error)
                dispatch("ERROR_HANDLE", error)
            })
    },
    ERROR_HANDLE({ commit }, error){
        console.log("HANDLE_ERROR()", error.response.status)
        switch(error.response.status){
            case 401:
                commit("SET_ERROR_MODAL", true);
                commit("SET_ERROR_MESSAGE", "You have entered an invalid email or password")
        }
    }
}

export default actions;