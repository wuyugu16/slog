import { createPage } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

const expc = []

export const plugin_own_blog = {
	name: 'vuepress-plugin-own-blog',
  	clientConfigFile: path.resolve(__dirname, './ownBlogClient.js'),
	extendsPage(page) {
		//console.log("extendsPage")
		if (!page.frontmatter) {
			page.frontmatter = {};
		}
		if (!page.frontmatter.category) {
			page.frontmatter.category = 'none';
		}
		if (!page.frontmatter.tag && page.frontmatter.category != 'diary') {
			page.frontmatter.tag = ['none'];
		}
		const rawDate = page.frontmatter.date;
		if (!rawDate){
			page.frontmatter.date = `1999-12-31`;
		}
		else{
			const d = new Date(rawDate);
			if (!isNaN(d.getTime())) {
				const y = d.getFullYear();
				const m = String(d.getMonth() + 1).padStart(2, '0');
				const day = String(d.getDate()).padStart(2, '0');
				page.frontmatter.date = `${y}-${m}-${day}`;
			}
			else {
				page.frontmatter.date = `1777-01-01`;
			}
		}
		if(page.date != "0000-00-00"){
			expc.push({
				path: page.path,
				title: page.title,
				date: page.date,
				tag: page.frontmatter.tag ?? [],
				category: page.frontmatter.category,
				sticky: page.frontmatter.sticky ?? 0,
			})
		}
		return page;
	},
	async onInitialized(app) {
		//console.log("onInitialized")
		async function createNew(path,layout){
			const page = await createPage(app, {
				path,
				frontmatter: { layout },
				content: "",
				title: false
			});
			app.pages.push(page)
			//console.log(path);
		}
		await createNew('/category/','Category')
		await createNew('/tag/','Tag')
		let _tag = [], _category = [];
		for(let i=0;i<expc.length;i++){
			let page = expc[i];
			if(!_category[page.category]){
				_category[page.category] = 1;
				await createNew(`/category/${page.category}/`,'Category')
			}
			for(let j=0; j<page.tag.length; j++){
				let tag = page.tag[j];
				if(!_tag[tag]){
					_tag[tag] = 1;
					await createNew(`/tag/${tag}/`,'Tag')
				}
			}
		}
	},
	define: {
		__OWN_BLOG_DATA : expc
  	},
};