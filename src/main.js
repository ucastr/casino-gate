import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import store from "./store";
import router from "./router";
import axios from "axios";

// import translations
import pt from "./locales/pt.json";
import en from "./locales/en.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

// Importar o Axios global no app Vue.js
app.config.globalProperties.$axios = axios;

// Configurar as opções CORS diretamente no cliente (navegador)
axios.defaults.withCredentials = true; // Permitir envio de cookies (se necessário)
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // Permitir acesso de qualquer origem
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE"; // Permitir os métodos HTTP especificados
axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization"; // Permitir os cabeçalhos especificados

// config i18n
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, pt },
});

// Vuex Store e Vue Router
app.use(store);
app.use(router);
app.use(i18n);
// Montar o app na div com id "app"
app.mount("#app");
