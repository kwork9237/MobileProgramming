<template>
    <div class="container">
        <q-page v-if="!this.loginStatus">
            <q-list>
                <q-item>
                    ID : <input v-model="uid"/>
                </q-item>
                <q-item>
                    PW : <input v-model="upw"/>
                </q-item>
            </q-list>
            <q-btn label="LOGIN" @click="login()"></q-btn>
        </q-page>

        <q-page v-else>
            <q-btn label="LOGOUT" @click="this.logout()"></q-btn>
        </q-page>
    </div>
</template>

<script>
import loginStore from "src/stores/LoginStore";
import { mapActions, mapState } from "pinia";

export default {
    name : "Login",
    title : "Login TEST",
    data() {
        return {
            uid : '',
            upw : '',
        };
    },
    computed : {
        ...mapState(loginStore, ["loginStatus"]),
    },
    mounted() { 
        console.log("loginStatus value : ", this.loginStatus);
    },
    methods : {
        ...mapActions(loginStore, ["loginCheck", "logoutProcess"]),
        login() {
            this.loginCheck(this.uid, this.upw);

            if(this.loginStatus) {
                this.$q.notify({
                    message : `로그인에 성공하셨습니다.`,
                    icon : "code",
                    color : "blue",
                });
            }

            else {
                this.$q.notify({
                    message : `아이디 및 비밀번호를 확인하세요.`,
                    icon : "warning",
                    color : "red",
                });
            }
        },

        logout() {
            this.$q.notify({
                message : `로그아웃이 정상적으로 되었습니다.`,
                icon : "code",
                color : "blue",
            });

            this.uid = this.upw = '';
            this.logoutProcess();
        }
    }
}
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>