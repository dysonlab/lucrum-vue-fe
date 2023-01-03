import axios from "axios";

export class LucrumAPI {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL
        })
    }

   async login(payload) {
        return this.instance.post("/auth/login", payload)
    }
}