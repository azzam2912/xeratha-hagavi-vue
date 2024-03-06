<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="pembungkus-logo" @click="$router.push('/')" >
            <img alt="Logo Maxflow Hagavi" 
                class="logo" 
                src="@/aset/icon.svg" 
                width="125" 
                height="125" />
        </div>
    <TheWelcome />
  </main>
</template>
