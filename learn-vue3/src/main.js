import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from "vue";
import App from "./App.vue";
// bootstrap
import 'bootstrap/dist/js/bootstrap.js';

//import AppCard from "@/components/AppCard.vue";



// vue instance 생성
const app = createApp(App)

app.provide('app-message', 'app message 입니다')

app.config.globalProperties.msg = 'hello';

app.mount("#app");
// AppCard 전역 등록
//app.component('AppCard',AppCard)


