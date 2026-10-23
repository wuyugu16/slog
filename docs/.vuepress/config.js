import { hopeTheme } from "vuepress-theme-hope";
import {defineUserConfig} from "vuepress";
import autoFrontmatter from "./plugins/auto-frontmatter";
import dataPlugin from "./plugins/dataPlugin";
import { viteBundler } from "@vuepress/bundler-vite";

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
	lang: "zh-CN",

	title: "wuyugu",

	theme: hopeTheme({
		sidebar: false,
		navbar: [
			"/",
			{
				text: "所有页面",
				link: "/article/",
			},
			{
				text: "分类",
				link: "/category/",
			},
			{
				text: "标签",
				link: "/tag/",
			},
			{
				text: "网站",
				link: "/posts/website",
			},
		],
		lastUpdated: false,
   	 	contributors: false,
		plugins: {
			blog: {
    			filter: (page) => page.filePathRelative?.startsWith("posts/") ?? false,
				excerpt: true, 
				/*category: [{
					key: "category",
					getter: page => page.frontmatter.category || "",
				}],
				tag:[{
					key: "tag",
					getter: (page) => {
						const t = page.frontmatter.tag;
						if (t == null) return [];                    // 无标签
						return Array.isArray(t) ? t.map(String) : [String(t)]; // 强制转为字符串数组
					},
				}],*/
				type: [{
					key: "article",
					filter: (page)=>true,
					sorter: (pageA, pageB) => {
						if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
							return pageB.frontmatter.sticky - pageA.frontmatter.sticky;
						if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
							return -1;
						if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky)
							return 1;
						if (!pageB.frontmatter.date) return 1;
						if (!pageA.frontmatter.date) return -1;
						return (
							new Date(pageB.frontmatter.date).getTime() -
							new Date(pageA.frontmatter.date).getTime()
						);
					},
				}]
			}
		},
	}),

	plugins : [
		autoFrontmatter(),
		dataPlugin,
	],
	
  	bundler: viteBundler(),

	alias: {
    // 定义一个 @data 别名，指向你的数据文件所在目录
    	'@public': path.resolve(__dirname, './public/public'),
  	},
});
