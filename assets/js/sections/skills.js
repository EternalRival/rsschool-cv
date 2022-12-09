import Node from '../classes/Node.js';

export default class Skills extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', sectionName);

    const skills = ['HTML Basics', 'CSS Basics', 'JS Basics', 'NodeJS Basics', 'VS Code'];

    this.list = new Node(this.el, 'skills__list', 'ul');
    this.items = skills.map((v) => new Node(this.list.el, 'skills_item', 'li', v));
  }
}
