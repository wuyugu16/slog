import { defineClientConfig } from 'vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import DrawioViewer from './components/DrawioViewer.vue'

export default defineClientConfig({
  layouts: {
    Article,
    Category,
    Tag,
  },
  enhance({ app, router, siteData }) {
    app.component('DrawioViewer', DrawioViewer)
  },
})
