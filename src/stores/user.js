import { defineStore } from "pinia";
import userApi from "src/apis/userApi";
export const useUserStore = defineStore("user", {
  state: () => ({
    member: null,
  }),
  getters: {},
  actions: {
    async loginLocal(form) {
      const result = await userApi.login(form);
      if (result && result.data) {
        this.member = result.data;
      }
      // console.log(this.member);
      return result;
    },

    logout() {
      if (this.member) {
        this.member = null;
      }
      this.router.push("/");
    },
  },
});