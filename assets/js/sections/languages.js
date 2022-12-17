import Node from '../classes/Node.js';

export default class Languages extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', {
      textContent: sectionName,
      id: sectionName,
    });

    const languages = ['Russian (Native)', 'English (~A2)'];

    this.list = new Node(this.el, 'languages__list', 'ul');
    this.items = languages.map((v) => new Node(this.list.el, 'languages_item', 'li', v));
  }
}
