import { defineStore } from "pinia";

export default defineStore("loginStore", {
    state:() => ({
        loginStatus : false,
    }),
    
    getters : {
    },

    actions : {
        loginCheck(id, pw) {
            if(id == 'admin' && pw == 'admin') {
                this.loginStatus = true;
                sessionStorage.setItem("loginStatus", this.loginStatus);
            }

            else {
                this.loginStatus = false;
                sessionStorage.setItem("loginStatus", this.loginStatus);
            }
        },

        logoutProcess() {
            this.loginStatus = false;
            sessionStorage.setItem("loginStatus", this.loginStatus);
        },

        getLoginStatus() {
            return sessionStorage.getItem("loginStatus");
        }
    }
})