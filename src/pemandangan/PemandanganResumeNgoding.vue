<script setup lang="ts">
import UnsurResume from '../komponen/UnsurResume.vue'
</script>
<template>
        <UnsurResume>
                <template #kata_pengantar>
                        <h3>If the pdf cannot be shown, you can download my latest resume on <a href="https://drive.google.com/file/d/1O_OgxQ8aCS0jIWkP140BBkKtNwkfQrEq/view?usp=drive_link" target="_blank">here!</a></h3>
                        Anyway here is the pdf of my resume (it should be shown after a moment):
                </template>
                <template #tempat_resume>
                        <iframe src="https://drive.google.com/file/d/1O_OgxQ8aCS0jIWkP140BBkKtNwkfQrEq/preview" width="100%" height="650" allow="autoplay"></iframe>
                </template>
        </UnsurResume>
</template>