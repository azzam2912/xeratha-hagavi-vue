import './aset/utama.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AplikasiUtamaVue from './AplikasiUtama.vue'
import pengrute from './router'

const aplikasi = createApp(AplikasiUtamaVue)
aplikasi.use(createPinia())
aplikasi.use(pengrute)
aplikasi.mount('#aplikasi')