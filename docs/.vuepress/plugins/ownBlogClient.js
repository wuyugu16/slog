import { computed, reactive } from 'vue'
import { useRoutePath, useRoutes } from 'vuepress/client'
import { defineClientConfig } from 'vuepress/client'
import Category from '../layouts/Category.vue'
import Tag from '../layouts/Tag.vue'

export function useBlogCategory(key) {
	//console.log(__OWN_BLOG_DATA);
	const routePath = useRoutePath()
	//const routes = useRoutes();
	//console.log('所有已注册路由:',routes.value)
	const map = computed(() => {
		const result = {}
		for (const page of __OWN_BLOG_DATA) {
			let raw = page[key]
			if (!raw) continue
			const names = Array.isArray(raw) ? raw : [raw]
			for (const name of names) {
				if (!name) continue
				if (!result[name]) {
					result[name] = {
						name,
						path: `/${key}/${name}/`,
						items: [],
					}
				}
				result[name].items.push({
					path: page.path,
					info: {
						title: page.title || '',
						date: page.date || null,
						category: page.category || '',
						tag: page.tag || [],
						sticky: page.sticky,
					},
				})
			}
		}
		return Object.keys(result).sort().reduce((acc, name) => {
			acc[name] = result[name]
			return acc
		}, {})
	})
	const currentItems = computed(() => {
		const p = routePath.value
		if (p === `/${key}/` || p === `/${key}`) return []
		const prefix = `/${key}/`
		if (p.startsWith(prefix)) {
			const name = decodeURIComponent(p.slice(prefix.length).replace(/\/$/, ''))
			for (const item of Object.values(map.value)) {
				if (item.name === name) {
					return item.items
				}
			}
		}
		return []
	})
	return reactive({ map, currentItems })
}

export default defineClientConfig({
  layouts: {
    Category,
    Tag,
  }
})
