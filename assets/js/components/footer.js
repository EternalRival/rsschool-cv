import Anchor from '../classes/Anchor.js';
import Node from '../classes/Node.js';

export default class Footer extends Node {
  constructor(parent) {
    super(parent, 'footer', 'footer');

    this.github = new Anchor(this.el, 'footer__github', {
      ariaLabel: 'github link',
      href: 'http://github.com/EternalRival/',
    });
    this.year = new Node(this.el, 'footer__year', 'p', '2022');
    this.logo = new Anchor(this.el, 'footer__logo', {
      ariaLabel: 'rsschool link',
      href: 'https://rs.school/js/',
    });
  }
}
