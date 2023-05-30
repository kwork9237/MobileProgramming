import { boot } from "quasar/wrappers";
import { useUserStore } from "src/stores/user";

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!userStore.isLoggedIn) {
        console.log("userStore.isLoggedIn", userStore.isLoggedIn);
        alert("로그인이 필요한 페이지입니다");
        router.push({
          path: "login",
          redirect: router.options.history.state.current,
        });
        next();
        return;
      }
    }
    next();
    return;
  });

});