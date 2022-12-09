import Anchor from './classes/Anchor.js';
import Element from './classes/Element.js';
import Section from './classes/Section.js';
import Text from './classes/Text.js';
import Contacts from './sections/contacts.js';
import Person from './sections/person.js';

const sections = ['contacts', 'skills', 'languages', 'summary', 'code', 'experience', 'education'];

const header = new Element(document.body, 'header', 'header');
const main = new Element(document.body, 'main', 'main');
const footer = new Element(document.body, 'footer', 'footer');

header.nav = new Element(header.el, 'nav', 'header__nav');
header.navList = new Element(header.nav.el, 'ul', 'header__nav-list');
sections.forEach((v) => {
  header[v] = new Element(header.navList.el, 'li', 'header__nav-item');
  header[v].link = new Anchor(header[v].el, 'header__nav-link', {
    href: `#${v}`,
    textContent: `${v}`,
  });
});

footer.github = new Anchor(footer.el, 'footer__github', '', {
  ariaLabel: 'github link',
  href: 'http://github.com/EternalRival/',
});
footer.year = new Element(footer.el, 'span', 'footer__year', '2022');
footer.logo = new Anchor(footer.el, 'footer__logo', {
  ariaLabel: 'rsschool link',
  href: 'https://rs.school/js/',
});

main.profile = new Element(main.el, 'div', 'profile');
main.description = new Element(main.el, 'div', 'description');

main.person = new Section(main.profile.el, 'roman ermishin');

/* sections.forEach((v, i) => {
  main[v] = new Element(i < 3 ? main.profile.el : main.description.el, 'section', `section ${v}`);
  main[v].heading = new Element(main[v].el, 'h2', 'section__title', v);
}); */

/* main.contacts.list = new Element(main.contacts.el, 'ul', 'contacts__list');

main.contacts.github = new Element(main.contacts.list.el, 'li', 'contacts__item');
Object.assign(main.contacts.github, {
  label: new Element(main.contacts.github.el, 'b', 'contacts__title', 'GitHub:'),
  link: new Anchor(main.contacts.github.el, 'contacts__link', {
    href: 'https://github.com/EternalRival/',
    textContent: '@EternalRival',
  }),
});

main.contacts.mail = new Element(main.contacts.list.el, 'li', 'contacts__item');
Object.assign(main.contacts.mail, {
  label: new Element(main.contacts.mail.el, 'b', 'contacts__title', 'E-Mail:'),
  link: new Anchor(main.contacts.mail.el, 'contacts__link', {
    href: 'mailto:erdevelopment8@gmail.com',
    textContent: 'erdevelopment8@gmail.com',
  }),
});

main.contacts.discord = new Element(main.contacts.list.el, 'li', 'contacts__item');
Object.assign(main.contacts.discord, {
  label: new Element(main.contacts.discord.el, 'b', 'contacts__title', 'Discord:'),
  link: new Anchor(main.contacts.discord.el, 'contacts__link', {
    href: 'https://discord.com/channels/@me/392430817625899008',
    textContent: 'Eternal Rival#0309',
  }),
});

main.contacts.telegram = new Element(main.contacts.list.el, 'li', 'contacts__item');
Object.assign(main.contacts.telegram, {
  label: new Element(main.contacts.telegram.el, 'b', 'contacts__title', 'Telegram:'),
  link: new Anchor(main.contacts.telegram.el, 'contacts__link', {
    href: 'https://t.me/Eternal_Rival',
    textContent: '@Eternal_Rival',
  }),
}); */
main.contacts = new Contacts();

const skills = ['HTML Basics', 'CSS Basics', 'JS Basics', 'NodeJS Basics', 'VS Code'];
main.skills.list = new Element(main.skills.el, 'ul', 'skills__list');
main.skills.items = skills.map((v) => new Element(main.skills.list.el, 'li', 'skills_item', v));

const languages = ['Russian (Native)', 'English (~A2)'];
main.languages.list = new Element(main.languages.el, 'ul', 'languages__list');
main.languages.items = languages.map(
  (v) => new Element(main.languages.list.el, 'li', 'languages_item', v),
);

main.summary.content = new Element(main.summary.el, 'p', 'summary__content');
main.summary.content.el.innerText = `The main goal is to get some Front-End dev skills for fun and profit.
Strong sides are logical thinking/mindset and assiduity.`;

main.code.wrapper = new Element(main.code.el, 'pre', 'code__wrapper');
main.code.content = new Element(main.code.wrapper.el, 'code', 'code__content');
main.code.content.text = [
  new Element(main.code.content.el, 'span', 'hjls-keyword', 'const'),
  new Text(main.code.content.el, ' '),
  new Element(main.code.content.el, 'span', 'hjls-function', 'solution'),
  new Text(main.code.content.el, ' = s => [...s].'),
  new Element(main.code.content.el, 'span', 'hjls-function', 'reverse'),
  new Text(main.code.content.el, '().'),
  new Element(main.code.content.el, 'span', 'hjls-function', 'join'),
  new Text(main.code.content.el, '('),
  new Element(main.code.content.el, 'span', 'hjls-string', "''"),
  new Text(main.code.content.el, ');\n\n'),
  new Element(main.code.content.el, 'span', 'hjls-keyword', 'function'),
  new Text(main.code.content.el, ' '),
  new Element(main.code.content.el, 'span', 'hjls-function', 'digitize'),
  new Text(main.code.content.el, '(n) {\n  '),
  new Element(main.code.content.el, 'span', 'hjls-keyword', 'return'),
  new Text(main.code.content.el, ' '),
  new Element(main.code.content.el, 'span', 'hjls-function', 'toString'),
  new Text(main.code.content.el, ' n.'),
  new Element(main.code.content.el, 'span', 'hjls-function', 'split'),
  new Text(main.code.content.el, '('),
  new Element(main.code.content.el, 'span', 'hjls-string', "''"),
  new Text(main.code.content.el, ').'),
  new Element(main.code.content.el, 'span', 'hjls-function', 'reverse'),
  new Text(main.code.content.el, '().'),
  new Element(main.code.content.el, 'span', 'hjls-function', 'map'),
  new Text(main.code.content.el, '(x => +x);\n}'),
];

Object.assign(main.experience, {});
main.experience.table = new Element(main.experience.el, 'table', 'experience__table');
main.experience.thead = new Element(main.experience.table.el, 'thead', 'experience__thead');
main.experience.title = new Element(main.experience.thead.el, 'tr', 'experience__title-row');
main.experience.titleItems = ['Name', 'Platform', 'Type', 'APL'].map(
  (v) => new Element(main.experience.title.el, 'th', 'experience__title-item', v),
);

main.experience.projects = new Element(main.experience.table.el, 'tbody', 'experience__tbody');
main.experience.projects.data = [
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
main.experience.projects.data.forEach((data) => {
  const project = new Element(main.experience.projects.el, 'tr', 'experience__project');
  const elements = {
    name: new Element(project.el, 'td', 'experience__project-name'),
    platform: new Element(project.el, 'td', 'experience__project-platform', data.platform),
    type: new Element(project.el, 'td', 'experience__project-type', data.type),
    apl: new Element(project.el, 'td', 'experience__project-apl', data.apl),
  };
  elements.link = new Element(elements.name.el, 'a', 'experience__project-name-link', data.name);
  elements.link.el.href = data.link;
  main.experience.projects[data.id] = Object.assign(project, { elements });
});

main.education.data = [
  ['HTML Academy', 'https://htmlacademy.ru/'],
  ['learn.javascript.ru', 'https://learn.javascript.ru/'],
  ['Stepik', 'https://stepik.org/learn'],
  ['docs.microsoft.com', 'https://docs.microsoft.com/en-us/learn/'],
  ['alexanderklimov\'s "Coding for Android"', 'https://developer.alexanderklimov.ru/android/'],
];
Object.assign(main.education.data, {
  htmlAcademy: [
    ['intro-to-web-development', 'https://htmlacademy.ru/courses/intro-to-web-development/'],
    ['basic-html-css', 'https://htmlacademy.ru/courses/basic-html-css/'],
  ],
  stepik: [
    ['Blender 3D modeling basics', 'https://stepik.org/course/72370/'],
    ['JavaScript for beginners', 'https://stepik.org/course/2223/'],
  ],
  microsoft: [
    [
      'Take your first steps with C#',
      'https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/',
    ],
    ['Work with data in C#', 'https://docs.microsoft.com/en-us/learn/paths/csharp-data/'],
  ],
});

const createUrlList = (parent, data, block) => {
  const list = new Element(parent.el, 'ul', `${block}__list`);
  list.elements = data.map((v) => {
    const li = new Element(list.el, 'li', `${block}__item`);
    li.link = new Anchor(li.el, `${block}__link`, { textContent: v[0], href: v[1] });
    return li;
  });
  Object.assign(parent, list);
};
createUrlList(main.education, main.education.data, 'education');
createUrlList(main.education.elements[0], main.education.data.htmlAcademy, 'education');
createUrlList(main.education.elements[2], main.education.data.stepik, 'education');
createUrlList(main.education.elements[3], main.education.data.microsoft, 'education');

// https://cdn.discordapp.com/attachments/952589254519820369/1050538552607383582/image.png
console.log(main);
