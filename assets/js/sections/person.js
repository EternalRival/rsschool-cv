import Node from '../classes/Node.js';

export default class Person extends Node {
  constructor(parent) {
    super(parent, 'section person', 'section');
    Object.assign(this, {
      heading: new Node(this.el, 'section__title person__name', 'h1', 'roman ermishin'),
      avatar: new Node(this.el, 'person__img', 'img'),
    });
    this.avatar.el.src = './assets/img/avatar.webp';
  }
}
