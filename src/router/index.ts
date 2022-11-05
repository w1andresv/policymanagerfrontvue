import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";

const router = createRouter({
	history: createWebHistory(), // parameter se vera antes de la ruta
	routes: [
		{
			path: "/",
			name: "app",
			component: App,
			children: [
				{
					path: "",
					name: "dashboard",
					component: () => import("../components/Dashboard.vue"),
				},
			],
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../pages/LoginView.vue"),
		},
		{
			path: "/notfound",
			name: "notFound",
			component: () => import("../pages/NotFoundView.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			redirect: "/",
		},
	],
	strict: true,
});

export default router;
