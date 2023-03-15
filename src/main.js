import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Paginate from "vuejs-paginate";

import "./index.css";

const app = createApp(App);

app.use(router);
app.component("paginate", Paginate);

app.mount("#app");
