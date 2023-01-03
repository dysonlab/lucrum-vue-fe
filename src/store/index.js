import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import mutations from "@/store/mutation";
import actions from "@/store/action";

export default createStore({
    state:{
        token: "",
        errorModalIsOpen: false,
        errorMessage: "",
    },
    mutations,
    actions,
    modules: {},
    plugins: [createPersistedState({ key: "lucrum" })],
})