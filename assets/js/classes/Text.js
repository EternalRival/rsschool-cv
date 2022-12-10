export default class {
  constructor(parent, content) {
    this.el = document.createTextNode(content);
    parent.append(this.el);
  }
}
