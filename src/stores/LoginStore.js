import { defineStore } from "pinia";

export default defineStore("loginStore", {
    /*
    state:() => ({
        loginStatus : false,
    }),
    */
    //  http://localhost/study/dbstore
    state : () => {
        return {
            loginStatus : undefined,
        }
    },
    
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
            /* 
            if(sessionStorage.getItem("loginStatus") != null)
                this.loginStatus = sessionStorage.getItem("loginStatus");
            else
                sessionStorage.setItem("loginStatus");
            */
            return this.loginStatus;
        }
    }
})