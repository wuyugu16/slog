<script setup>
const { items } = defineProps({
	items: {
		type: Array,
		required: true,
	},
});
const sorter = (pageA, pageB) => {
	if (pageA.info.sticky && pageB.info.sticky)
		return pageB.info.sticky - pageA.info.sticky;
	if (pageA.info.sticky && !pageB.info.sticky)
		return -1;
	if (!pageA.info.sticky && pageB.info.sticky)
		return 1;
	if (!pageB.info.date) return 1;
	if (!pageA.info.date) return -1;
	return (
		new Date(pageB.info.date).getTime() -
		new Date(pageA.info.date).getTime()
	);
};
items.sort(sorter);
console.log(items)
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
			<span v-if="info.sticky" class="pin" aria-label="置顶" title="置顶">📌</span>

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

.article-wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.25rem;
}

.article {
  	position: relative;
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
	.pin {
		position: absolute;
		top: 0.5rem;
		right: 0.75rem;
		font-size: 0.85rem;
	}
}
</style>
