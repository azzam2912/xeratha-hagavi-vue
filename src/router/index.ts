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
              path: '/resume-ngajar',
              name: 'resume-ngajar',
              component: () => import('../pemandangan/PemandanganResumeNgajar.vue')
          },
          {
              path: '/resume-ngoding',
              name: 'resume-ngoding',
              component: () => import('../pemandangan/PemandanganResumeNgoding.vue')
          }
        ]
    }
)
export default pengrute