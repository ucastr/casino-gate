<template>
  <LoginView />
  <LocaleChanger />
  <RouterView />
</template>

<script>
import LocaleChanger from "./components/LocaleChanger.vue";
import LoginView from "./components/LoginView.vue";
export default {
  name: "App",
  components: {
    LoginView,
    LocaleChanger,
  },
};
</script>
<style>
@import url("./assets/css/main.css");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;
  align-items: stretch;
  /* width: 100vw; */
  height: 100vh;
}
</style>
