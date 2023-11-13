import "./assets/main.css";
import "./assets/sass/style.scss";
import "@mdi/font/css/materialdesignicons.min.css";

// import "./resources";
import loadAdvertise from "./resources/components/Advertisement";
import loadHeader from "./resources/components/Header";
import loadHomeSection from "./resources/components/HomeSection";
import loadCategorySection from "./resources/components/CategorySection";
import loadProduct from "./resources/components/Product";
import loadFooter from "./resources/components/Footer";
import loadPopularProducts from "./resources/components/PopularProducts";
import loadCart from "./resources/components/Cart";
import loadPageHeader from "./resources/components/PageHeader";
import loadPayment from "./resources/components/Payment";
import loadProfile from "./resources/components/Profile";

import router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import function to register Swiper custom elements



const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(createPinia());
app.mount("#app");
loadAdvertise(app);
loadHeader(app);
loadHomeSection(app);
loadCategorySection(app);
loadProduct(app);
loadFooter(app);
loadPopularProducts(app);
loadCart(app);
loadPageHeader(app);
loadPayment(app);
loadProfile(app);