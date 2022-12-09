import Anchor from '../classes/Anchor.js';
import Node from '../classes/Node.js';

export default class Header extends Node {
  constructor(parent) {
    super(parent, 'header', 'header');
    const sections = [
      'contacts',
      'skills',
      'languages',
      'summary',
      'code',
      'experience',
      'education',
    ];
    this.nav = new Node(this.el, 'header__nav', 'nav');
    const list = new Node(this.nav.el, 'header__nav-list', 'ul');
    const items = {};
    const links = {};

    sections.forEach((v) => {
      items[v] = new Node(list.el, 'header__nav-item', 'li');
      links[v] = new Anchor(items[v].el, 'header__nav-link', { href: `#${v}`, textContent: v });
    });

    Object.assign(this, { list, items, links });
  }
}
