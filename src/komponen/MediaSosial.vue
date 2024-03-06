<script setup lang="ts">
defineProps<{
    link?: string
}>();
</script>

<template>
    <a :href="link" class="kotak-medsos">
        <div class="kelas-ikon">
            <slot name="ikon"></slot>
        </div>
        <h4>
            <slot name="kepsyen"></slot>
        </h4>
    </a>
</template>

<style scoped>
.kotak-medsos {
    display: grid;
    grid-template-columns: 32px auto;
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

  color: var(--color-text);
}

h4 {
  font-size: 1.08rem;
  font-weight: 500;
}
</style>