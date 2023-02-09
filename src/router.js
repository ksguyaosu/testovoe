import {createRouter, createWebHashHistory} from "vue-router";
import tablePage from '@/components/table.vue'
import layoutPage from '@/components/layout.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/table', component: tablePage },
        { path: '/layout', component: layoutPage }
    ]
})