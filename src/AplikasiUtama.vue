<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <img alt="Logo Maxflow Hagavi" class="logo" src="@/aset/icon.svg" width="125" height="125" />
        <div class="wrapper">
            <nav>
                <RouterLink to="/">About</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}
</style>