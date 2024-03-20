<script setup lang="ts">
import jsonTekno from '@/data/tumpukantekno.json';
const getImageUrl = (path: string) => {
 return new URL(`../aset/${path}`, import.meta.url).href;
};
</script>

<template>
    <div class="pembungkus-tumpukantekno">
        <div v-for="barang of jsonTekno" :key="barang.kepsyen">
            <div class="kotak-tekno">
                <img class="gambar-ikon" v-bind:src="getImageUrl(barang.jalurIkon)" :alt="barang.kepsyen" />
                <span>{{barang.kepsyen}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gambar-ikon {
    display: block;
    place-items: center;
    place-content: center;
    width: 40px;
    height: 40px;
}
.kotak-tekno {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.1rem;
    margin: 0.2rem;
    cursor: pointer;
}
.pembungkus-tumpukantekno {
    display: flex;
}
</style>