<script setup lang="ts">
    defineProps<{
        msg?: string;
    }>()
</script>
<template>
    <span class="merah">
        {{ msg }}
    </span>
</template>

<style scoped>

</style>