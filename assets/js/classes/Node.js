export default class Node {
  constructor(parent, className, tag, attrs) {
    this.el = document.createElement(tag || 'div');
    if (className) this.el.className = className;
    if (typeof attrs === 'string') {
      if (attrs.includes('\n')) this.el.innerText = attrs;
      else this.el.textContent = attrs;
    } else {
      Object.assign(this.el, attrs);
    }
    parent.append(this.el);
  }
}
