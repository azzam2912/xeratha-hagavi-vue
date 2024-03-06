import { createRouter, createWebHistory } from "vue-router";

const pengrute = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
          {
              path: '/',
              name: 'rumah',
              component: () => import('../pemandangan/PemandanganRumah.vue')
          },
          {
              path: '/pengalaman',
              name: 'pengalaman',
              component: () => import('../pemandangan/PemandanganDetailTentang.vue')
          }
        ]
    }
)
export default pengrute