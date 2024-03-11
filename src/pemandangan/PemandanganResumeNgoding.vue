<template>
	<div>
        <object width="100%" height="700" type="application/pdf" data="src/data/resume-ngoding.pdf">
            <p>Sorry, the PDF cannot be shown :(</p>
        </object>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
	}
}

</script>