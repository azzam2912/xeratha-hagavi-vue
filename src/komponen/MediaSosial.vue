<script setup lang="ts">
defineProps<{
    link?: string
}>();
</script>

<template>
    <a :href="link" class="kotak-medsos" target="_blank">
        <div class="kelas-ikon">
            <slot name="ikon"></slot>
        </div>
        <span>&nbsp;</span>
        <h4>
            <slot name="kepsyen"></slot>
        </h4>
    </a>
</template>

<style scoped>
.kotak-medsos {
    display: grid;
    grid-template-columns: 32px 1rem auto;
    padding: 2px;
    align-items: center;
    justify-content: start;
}
kelas-ikon {
  display: block;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  margin-right: 2px;
}

h4 {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-heading);
  margin-left: 4px;
}
</style>