import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './views/HomePage.vue';
import AboutUser from './components/UserForm.vue';
import UserProfile from './views/UserProfile.vue';
import LoadPhotos from './views/LoadPhotos.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutUser },
    { path: '/profile', component: UserProfile },
    { path: '/photos', component: LoadPhotos }
]        

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  
  export default router