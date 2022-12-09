import Anchor from '../classes/Anchor.js';
import Node from '../classes/Node.js';

export default class Contacts extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', sectionName);

    this.list = new Node(this.el, `${sectionName}__list`, 'ul');

    this.github = new Node(this.list.el, `${sectionName}__item`, 'li');
    Object.assign(this.github, {
      label: new Node(this.github.el, `${sectionName}__title`, 'b', 'GitHub:'),
      link: new Anchor(this.github.el, `${sectionName}__link`, {
        href: 'https://github.com/EternalRival/',
        textContent: '@EternalRival',
      }),
    });

    this.mail = new Node(this.list.el, `${sectionName}__item`, 'li');
    Object.assign(this.mail, {
      label: new Node(this.mail.el, `${sectionName}__title`, 'b', 'E-Mail:'),
      link: new Anchor(this.mail.el, `${sectionName}__link`, {
        href: 'mailto:erdevelopment8@gmail.com',
        textContent: 'erdevelopment8@gmail.com',
      }),
    });

    this.discord = new Node(this.list.el, `${sectionName}__item`, 'li');
    Object.assign(this.discord, {
      label: new Node(this.discord.el, `${sectionName}__title`, 'b', 'Discord:'),
      link: new Anchor(this.discord.el, `${sectionName}__link`, {
        /* href: 'https://discord.com/channels/@me/392430817625899008', */
        textContent: 'Eternal Rival#0309',
      }),
    });

    this.telegram = new Node(this.list.el, `${sectionName}__item`, 'li');
    Object.assign(this.telegram, {
      label: new Node(this.telegram.el, `${sectionName}__title`, 'b', 'Telegram:'),
      link: new Anchor(this.telegram.el, `${sectionName}__link`, {
        href: 'https://t.me/Eternal_Rival',
        textContent: '@Eternal_Rival',
      }),
    });
  }
}
