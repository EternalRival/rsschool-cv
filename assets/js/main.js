import Element from './classes/Element.js';

const header = new Element(document.body, 'header', 'header');
const main = new Element(document.body, 'main', 'main');
const footer = new Element(document.body, 'footer', 'footer');

header.nav = new Element(header.el, 'nav', 'header__nav');
header.navList = new Element(header.nav.el, 'ul', 'header__nav-list');
['contacts', 'summary', 'skills', 'code', 'experience', 'education', 'languages'].forEach((v) => {
  header[v] = new Element(header.navList.el, 'li', 'header__nav-item');
  header[v].link = new Element(header[v].el, 'a', 'header__nav-link', `${v}`);
  header[v].link.el.href = `#${v}`;
});

footer.github = new Element(footer.el, 'a', 'footer__github', 'gh');
footer.year = new Element(footer.el, 'span', 'footer__year', '2022');
footer.logo = new Element(footer.el, 'a', 'footer__logo', 'logo');
footer.github.el.ariaLabel = 'github link';
footer.github.el.ariaLabel = 'rsschool link';
