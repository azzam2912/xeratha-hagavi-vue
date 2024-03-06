<script setup lang="ts">
import MediaSosial from '@/komponen/MediaSosial.vue';
import jsonMedsos from '@/data/medsos.json'
</script>

<template>
    <div  class="pembungkus-medsos">
        <div v-for="barang of jsonMedsos" :key="barang.kepsyen">
            <MediaSosial :link="barang.link">
                <template #ikon>
                    <img class="gambar-ikon" :src="barang.jalurIkon" :alt="barang.kepsyen" />
                </template>
                <template #kepsyen>
                {{ barang.kepsyen }}
                </template>
            </MediaSosial>
        </div>
    </div>
            <div class="pembungkus-logo" @click="$router.push('/')" >
            <img alt="Logo Maxflow Hagavi" 
                class="logo" 
                src="@/aset/ikon/linkedin.svg" 
                width="125" 
                height="125" />
        </div>
</template>

<style scoped>
.gambar-ikon {
    display: block;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
}
.pembungkus-medsos {
    margin: 10px;
    justify-content: start;
}
</style>