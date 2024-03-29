const { stripHTML } = require('hexo-util');

// When using hexo-renderer-marked, the header link is generated as follows:
// <h3 id="Filter-Coordinate"><a href="#Filter-Coordinate" class="headerlink" title="Filter Coordinate"></a>Filter Coordinate</h3>
// However, the header link generated by hexo-renderer-pandoc is:
// <h3 id="filter-coordinate">Filter Coordinate</h3>
// There are themes that rely on the "headerlink" element to show the anchor icon.
// So we need to mimic the behavior of hexo-renderer-marked.

hexo.extend.filter.register('after_post_render', (data) => {
  // https://github.com/hexojs/hexo-renderer-marked/blob/master/lib/renderer.js#L59
  data.content = data.content.replace(
    /<h([1-6]) id="(.+)">(.+?)<\/h[1-6]>/g,
    (match, level, id, content) => {
      const title = stripHTML(content);
      return `<h${level} id="${id}"><a href="#${id}" class="headerlink" title="${title}"></a>${content}</h${level}>`;
    },
  );

  return data;
});
