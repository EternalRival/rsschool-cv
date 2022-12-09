import Anchor from '../classes/Anchor.js';
import Node from '../classes/Node.js';

export default class Experience extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', sectionName);

    this.table = new Node(this.el, 'experience__table', 'table');
    this.thead = new Node(this.table.el, 'experience__thead', 'thead');
    this.title = new Node(this.thead.el, 'experience__title-row', 'tr');
    this.titleItems = ['Name', 'Platform', 'Type', 'APL'].map(
      (v) => new Node(this.title.el, 'experience__title-item', 'th', v),
    );

    this.projects = new Node(this.table.el, 'experience__tbody', 'tbody');
    this.projects.data = [
      {
        id: 'raven',
        name: 'IQ test Raven',
        link: 'https://play.google.com/store/apps/details?id=ru.er_dev.iqtestrpm',
        platform: 'Android App',
        type: 'Pet Project',
        apl: 'Kotlin',
      },
      {
        id: 'ratel',
        name: 'RatelTwitchChatBot',
        link: 'https://github.com/EternalRival/twitchChatBot',
        platform: 'NodeJS App',
        type: 'Pet Project',
        apl: 'Javascript',
      },
      {
        id: 'clipDownloader',
        name: 'Twitch Clip Downloader',
        link: 'https://github.com/EternalRival/twitch-clip-downloader',
        platform: 'Electron App',
        type: 'Pet Project',
        apl: 'HTML / CSS / JS',
      },
    ];
    this.projects.data.forEach((data) => {
      const project = new Node(this.projects.el, 'experience__project', 'tr');
      const elements = {
        name: new Node(project.el, 'experience__project-name', 'td'),
        platform: new Node(project.el, 'experience__project-platform', 'td', data.platform),
        type: new Node(project.el, 'experience__project-type', 'td', data.type),
        apl: new Node(project.el, 'experience__project-apl', 'td', data.apl),
      };
      elements.link = new Anchor(elements.name.el, 'experience__project-name-link', {
        href: data.link,
        textContent: data.name,
      });
      this.projects[data.id] = Object.assign(project, { elements });
    });
  }
}
