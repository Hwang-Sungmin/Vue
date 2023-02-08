<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<p class="text-muted">{{ createAt }}</p>
		</div>
	</div>
</template>

<script setup="setup">
defineProps({
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
	},
	createAt: {
		type: [String, Date, Number],
	},
});
</script>

<style lang="scss" scoped="scoped"></style>
