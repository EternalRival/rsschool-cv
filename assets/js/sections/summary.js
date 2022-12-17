import Node from '../classes/Node.js';

export default class Summary extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', {
      textContent: sectionName,
      id: sectionName,
    });

    const text = [
      'The main goal is to get some Front-End dev skills for fun and profit.',
      'Strong sides are logical thinking/mindset and assiduity.',
    ].join('\n');

    this.content = new Node(this.el, 'summary__content', 'p', text);
  }
}
