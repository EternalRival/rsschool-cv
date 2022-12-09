export default class Element {
  constructor(parent, tag, className, content) {
    this.el = document.createElement(tag || 'div');
    if (className) this.el.className = className;
    this.el.textContent = content || '';
    parent.append(this.el);
  }
}
