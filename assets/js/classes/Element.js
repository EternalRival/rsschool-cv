export default class Element {
  constructor(parent, tag, className, content) {
    this.el = document.createElement(tag || 'div');
    Object.assign(this.el, { textContent: content, className });
    parent.append(this.el);
  }
}
