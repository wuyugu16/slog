import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import { plugin_own_blog } from "./plugins/ownBlog" //如果这行注释取消，那么：
//Cannot find package '@internal/routes' imported from C:\Users\wuzhi\Desktop\blog\node_modules\@vuepress\client\dist\utils-jFeCv-dX.js

import dataPlugin from "./plugins/dataPlugin";

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
	lang: "zh-CN",
	title: "wuyugu",
	theme: hopeTheme({
		navbarLayout: {
			start: ["Brand"],          // 左侧：站点名称/Logo
			center: [],                 // 中间留空
			end: ["Links"],             // 右侧：导航链接
		},
		sidebar: false,
		navbar: [
			"/",
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
		pageInfo: false,
    	pure: true,
    	breadcrumb: false,
    	toc: false,
	}),

	plugins : [
		plugin_own_blog,
		dataPlugin,
	],
	bundler: viteBundler({
		viteOptions: {
		server: {
			fs: {
			// 禁用文件系统缓存检查
			cachedChecks: false,
			},
		},
		},
	}),

	alias: {
    	'@public': path.resolve(__dirname, './public/public'),
  	},
});
