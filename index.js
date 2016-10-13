function Renderer (options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  return '\n\n' + code + '\n\n';
}
Renderer.prototype.blockquote = function(quote) {
  return '\t' + quote + '\n';
}
Renderer.prototype.html = function(html) {
  return html;
}
Renderer.prototype.heading = function(text, level, raw) {
  return text;
}
Renderer.prototype.hr = function() {
  return '\n\n';
}
Renderer.prototype.list = function(body, ordered) {
  return body;
}
Renderer.prototype.listitem = function(text) {
  return '\t' + text + '\n';
}
Renderer.prototype.paragraph = function(text) {
  return '\n' + text + '&#x20;\n';
}
Renderer.prototype.table = function(header, body) {
  return  '\n' + header + '\n' + body + '\n';
}
Renderer.prototype.tablerow = function(content) {
  return content + '\n';
}
Renderer.prototype.tablecell = function(content, flags) {
  return content + '\t';
}
Renderer.prototype.strong = function(text) {
  return text;
}
Renderer.prototype.em = function(text) {
  return text;
}
Renderer.prototype.codespan = function(text) {
  return text;
}
Renderer.prototype.br = function() {
  return '\n\n';
}
Renderer.prototype.del = function(text) {
  return text;
}
Renderer.prototype.link = function(href, title, text) {
  return text;
}
Renderer.prototype.image = function(href, title, text) {
  return text;
}
Renderer.prototype.text = function(text) {
  return text;
}

module.exports = Renderer;
