import { createRouter, createWebHistory } from "vue-router";

const pengrute = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'rumah',
                component: () => import('../dilihat/TentangSayaDilihat.vue')
            }
        ]
    }
)
export default pengrute