<script setup lang="ts">
    defineProps<{
        pesan?: string;
    }>()
</script>
<template>
    <span class="merah">
        {{ pesan }}
    </span>
</template>

<style scoped>

</style>