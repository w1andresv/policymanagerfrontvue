import { createApp } from "vue";
import "./style.css";
import "./assets/styles/layout.scss";
import "primevue/resources/themes/lara-light-teal/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import router from "./router";
import PrimeVue from "primevue/config";
import { components } from "./primevue";
import StyleClass from "primevue/styleclass";
import AppWrapper from "./components/layout/AppWrapper.vue";
export const app = createApp(AppWrapper);
app.use(router);
app.use(PrimeVue);
Object.entries(components).forEach(([name, component]) =>
	app.component(name, component)
);

app.directive("styleclass", StyleClass);
app.mount("#app");
