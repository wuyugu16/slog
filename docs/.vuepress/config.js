import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import { plugin_own_blog } from "./plugins/ownBlog"
import dataPlugin from "./plugins/dataPlugin";
import navData from "../posts/website"

function nav2obj(x){
	return x.map(x=>({text:x[0],link:x[1]}))
}

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
	lang: "zh-CN",
	title: "wuyugu",
	base: "/slog/",
	theme: hopeTheme({
		markdown: {
			math: {
				type: "katex",
			},
    		footnote: true,
    		breaks: true,
		},
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
				children: [
					{text: "数学",children: nav2obj(navData[0])},
					{text: "编程",children: nav2obj(navData[1])},
					{text: "理综",children: nav2obj(navData[2])},
					{text: "有用的",children: nav2obj(navData[3])},
				]
			},
			{
				text: "摸鱼",
				children: [
					{text: "摸小鱼",children: nav2obj(navData[4])},
					{text: "摸大鱼",children: nav2obj(navData[5])},
					{text: "摸一兜鱼",children: nav2obj(navData[6])},
					{text: "队列",children: nav2obj(navData[7])},
				]
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
