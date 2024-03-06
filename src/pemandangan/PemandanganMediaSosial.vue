<script setup lang="ts">
import MediaSosial from '@/komponen/MediaSosial.vue';
import jsonMedsos from '@/data/medsos.json';
const getImageUrl = (path: string) => {
 return new URL(`../aset/${path}`, import.meta.url).href;
};
</script>

<template>
    <div  class="pembungkus-medsos">
        <div v-for="barang of jsonMedsos" :key="barang.kepsyen">
            <MediaSosial :link="barang.link">
                <template #ikon>
                    <img class="gambar-ikon" v-bind:src="getImageUrl(barang.jalurIkon)" />
                </template>
                <template #kepsyen>
                {{ barang.kepsyen }}
                </template>
            </MediaSosial>
        </div>
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