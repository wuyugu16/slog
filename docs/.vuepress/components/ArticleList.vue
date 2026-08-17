<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div class="article-wrapper">
		<div v-if="!items.length">Nothing in here :D</div>

		<article
			v-for="{info, path} in items"
			:key="path"
			class="article"
			@click="$router.push(path)"
		>
			<header class="title">
				{{ info.title }}
			</header>

			<hr />

			<div class="article-info">
				<code v-if="info.date" class="date"
					>{{ new Date(info.date).toLocaleDateString() }}</code
				>
&ensp;
				<code v-if="info.category" class="category"
					>{{ info.category }}</code
				>
&ensp;
				<code v-if="info.tag" class="tag"
					>{{ info.tag.join(", ") }}</code
				>
			</div>
		</article>
	</div>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
	@include mixins.content-wrapper;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.25rem;
}

.article {
	box-sizing: border-box;
	padding: 1rem 1.25rem;
	border: 1px solid var(--vp-c-border);
	border-radius: 0.4rem;
	width: 400px;
	flex-shrink: 0;
	color: var(--vp-c-text);
	text-align: start;

	&:hover {
		cursor: pointer;
	}

	.title {
		font-size: 1.28rem;
		line-height: 2rem;
	}

	.article-info {
		> span {
		margin-inline-end: 0.5em;
		line-height: 1.8;
		}
	}
}
</style>
