<template>
  <div class="login-bg">
    <div class="login-title text-start">
      <h1>{{ $t("login.title") }}</h1>
    </div>
    <div class="login-description">
      <h2>{{ $t("login.description") }}</h2>
    </div>
    <main class="form-signin m-auto">
      <form name="login-form" @submit.prevent="login">
        <h1 class="login-title-inner">
          <img src="../assets/login-mini-logo.png" /><span class="spacer"
            >|</span
          >Backoffice
        </h1>
        <h2 class="h5 mb-4 fw-normal">SIGN IN</h2>

        <div class="form text-start mb-4">
          <label for="floatingInput" class="loginLabel">Username</label>
          <input
            type="text"
            class="form-control login"
            id="username"
            :autocomplete="autocompleteValue"
            :placeholder="$t('login.usernamePlaceholder')"
            v-model="input.username"
          />
        </div>
        <div class="form text-start mb-2">
          <label for="floatingPassword" class="loginLabel">Password</label>
          <button class="eye-icon" @click="togglePasswordVisibility">
            <img src="../assets/eye-icon.png" v-if="showPassword === false" />
            <img src="../assets/eye-icon.png" v-else />
          </button>
          <input
            class="form-control login"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            :autocomplete="autocompleteValue"
            :placeholder="$t('login.passwordPlaceholder')"
            v-model="input.password"
          />
        </div>

        <div class="form-check text-start mb-5">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
            v-model="input.rememberMe"
          />
          <label class="form-check-label loginLabel" for="flexCheckDefault">
            {{ $t("login.rememberMe") }}
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          {{ $t("login.buttonSignIn") }}
        </button>
      </form>
    </main>
    <div class="login-logo text-start">
      <img src="../assets/login-main-logo.svg" />
    </div>
  </div>
</template>

<script>
import {
  SET_AUTHENTICATION,
  SET_USERNAME,
  SET_TOKEN,
  GET_TOKEN,
  IS_USER_AUTHENTICATED,
} from "../store/storeconstants";

export default {
  name: "LoginView",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      autocompleteValue: "off",
      rememberMe: false,
      showPassword: false,
      output: "",
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    checkRememberMe() {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const { username, password, rememberMe } = JSON.parse(userData);
        if (rememberMe) {
          this.input.username = username;
          this.input.password = password;
          this.input.rememberMe = rememberMe;
        }
      }
    },
    async login() {
      if (!this.input.username || !this.input.password) {
        this.output = "Username and password cannot be empty";
        return;
      }

      try {
        let data = JSON.stringify({
          username: this.input.username,
          password: this.input.password,
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://staging.casinogate.pt/backoffice/login",
          headers: {
            Authorization:
              "Basic Q0FTSU5PR0FURTo2dCUkcSQ5cTRleng3JmcocHNvM3BxeiYkemFqMXEkdjZsPQ==",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          data: data,
        };

        this.$axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            console.log(response.data.casinoId[0]);
            //validar se o username será o casino id ou o user para entrar na app
            this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
            this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
            this.$store.commit(`auth/${SET_TOKEN}`, response.data.token);

            console.log("value of SET_AUTHENTICATION == ", SET_AUTHENTICATION);
            console.log("value of SET_USERNAME == ", SET_USERNAME);
            console.log("value of set token == ", SET_TOKEN);

            const token = this.$store.getters[`auth/${GET_TOKEN}`];
            console.log("Valor atual do token:", token);

            const auth = this.$store.getters[`auth/${IS_USER_AUTHENTICATED}`];
            console.log("Valor atual do IS_USER_AUTHENTICATED:", auth);
            //GET THE ARRAY MENUS LIST

            let data = JSON.stringify({
              token: response.data.token,
            });

            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: "https://staging.casinogate.pt/backoffice/get_permissions",
              headers: {
                Authorization:
                  "Basic Q0FTSU5PR0FURTo2dCUkcSQ5cTRleng3JmcocHNvM3BxeiYkemFqMXEkdjZsPQ==",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
              data: data,
            };

            this.$axios
              .request(config)
              .then((response) => {
                console.log(JSON.stringify(response.data));
                const permissions = response.data.permissions;
                // Seu componente de login
                this.$store.commit("permissions/SET_PERMISSIONS", permissions);
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
                console.log("this.$router.push(/dashboard)");
                this.$router.push("/dashboard");
                console.log("this.$router.push(/dashboard)");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
        this.output = "An error occurred during login";
      }
    },
  },
  mounted() {
    this.checkRememberMe();
  },
};
</script>

<style>
.error {
  color: red;
}
button.eye-icon {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  z-index: 1;
  margin-top: 1.75em;
  right: 3em;
  outline: 0 !important;
  border: 0 !important;
}
</style>
