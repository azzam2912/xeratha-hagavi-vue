<script setup>
    import pdf from 'vue-pdf'
    const props = defineProps({
        jalurPDF: {
            type: String,
            required: true
        }
    })
    const currentPage = ref(0)
    const pageCount = ref(0)
</script>
<template>
	<div>
		{{currentPage}} / {{pageCount}}
		<pdf
			src="https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
			@num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
		></pdf>
	</div>
</template>
<style>
</style>