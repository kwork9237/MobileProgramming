import { defineStore } from "pinia";

export default defineStore("loginStore", {
    state:() => ({
        loginStatus : false,
    }),
    
    getters : {
    },

    actions : {
        loginCheck(id, pw) {
            if(id == 'admin' && pw == 'admin')
                this.loginStatus = true;

            else
                this.loginStatus = false;
        },

        logoutProcess() {
            this.loginStatus = false;
        }
    }
})