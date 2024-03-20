<template>
    <div class="unsur">
        <slot name="kata_pengantar"></slot>
        <br />
        <br />
        <slot name="tempat_resume"></slot>
    </div>
</template>
<style scoped>
    .unsur {
        margin-top: 1.3rem;
        padding: 0.5rem;
    }
</style>