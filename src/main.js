import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // <-- Ensure this is imported
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()
createApp(App).use(router).mount('#app')  // <-- Make sure to use the router here
