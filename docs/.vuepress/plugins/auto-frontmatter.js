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
      return page;
    },
  };
};