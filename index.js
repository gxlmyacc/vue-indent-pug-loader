const pug = require('pug');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = Object.assign({
    filename: this.resourcePath,
    doctype: 'html',
    compileDebug: this.debug || false
  }, loaderUtils.getOptions(this));

  let matchs = source.match(/^[(?:\n\r?)|(?:\r\n)]*(\u0020+)\S+/);
  if (matchs && matchs[1].length) {
    const sources = source.split('\n');
    const regx = new RegExp('^\\u0020{' + matchs[1].length + '}');
    sources.forEach(function (s, i) {
      sources[i] = s.replace(regx, '');
    });
    source = sources.join('\n');
  }
  const template = pug.compile(source, options);
  template.dependencies.forEach(this.addDependency);
  return template(options.data || {});
};
