import Node from '../classes/Node.js';
import Text from '../classes/Text.js';

export default class Code extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', sectionName);

    this.wrapper = new Node(this.el, 'code__wrapper', 'pre');
    this.content = new Node(this.wrapper.el, 'code__content', 'code');
    this.content.text = [
      new Node(this.content.el, 'hjls-keyword', 'span', 'const'),
      new Text(this.content.el, ' '),
      new Node(this.content.el, 'hjls-function', 'span', 'solution'),
      new Text(this.content.el, ' = s => [...s].'),
      new Node(this.content.el, 'hjls-function', 'span', 'reverse'),
      new Text(this.content.el, '().'),
      new Node(this.content.el, 'hjls-function', 'span', 'join'),
      new Text(this.content.el, '('),
      new Node(this.content.el, 'hjls-string', 'span', "''"),
      new Text(this.content.el, ');\n\n'),
      new Node(this.content.el, 'hjls-keyword', 'span', 'function'),
      new Text(this.content.el, ' '),
      new Node(this.content.el, 'hjls-function', 'span', 'digitize'),
      new Text(this.content.el, '(n) {\n  '),
      new Node(this.content.el, 'hjls-keyword', 'span', 'return'),
      new Text(this.content.el, ' '),
      new Node(this.content.el, 'hjls-function', 'span', 'toString'),
      new Text(this.content.el, ' n.'),
      new Node(this.content.el, 'hjls-function', 'span', 'split'),
      new Text(this.content.el, '('),
      new Node(this.content.el, 'hjls-string', 'span', "''"),
      new Text(this.content.el, ').'),
      new Node(this.content.el, 'hjls-function', 'span', 'reverse'),
      new Text(this.content.el, '().'),
      new Node(this.content.el, 'hjls-function', 'span', 'map'),
      new Text(this.content.el, '(x => +x);\n}'),
    ];
  }
}
