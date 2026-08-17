export default (options = {}) => {
  return {
    name: 'vuepress-plugin-auto-frontmatter',
    extendsPage(page) {
      if (!page.frontmatter) {
        page.frontmatter = {};
      }
      if (!page.frontmatter.category) {
        page.frontmatter.category = 'none';
        if(page.routeMeta._blog) page.routeMeta._blog.category = 'none';
      }
      if (!page.frontmatter.tag && page.frontmatter.category != 'diary') {
        page.frontmatter.tag = ['none'];
        if(page.routeMeta._blog) page.routeMeta._blog.tag = ['none'];
      }
      return page;
    },
  };
};