import { createApp } from "vue";
import "./style.css";
import './assets/styles/layout.scss';
import "primevue/resources/themes/lara-light-teal/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import { components } from "./primevue";

export const app = createApp(App);
app.use(router);
app.use(PrimeVue);
Object.entries(components).forEach(([name, component]) =>
	app.component(name, component)
);

app.mount("#app");
