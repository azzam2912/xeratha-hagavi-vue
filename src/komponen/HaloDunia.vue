<script setup lang="ts">
    defineProps<{
        pesan: string
    }>()
</script>

<template>
    <div class="salam">
        <h1 class="merah">{{ pesan }}</h1>
    </div>
</template>

<style scoped>

</style>