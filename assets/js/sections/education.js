import Anchor from '../classes/Anchor.js';
import Node from '../classes/Node.js';

const createUrlList = (parent, data, block) => {
  const list = new Node(parent.el, `${block}__list`, 'ul');
  list.elements = data.map((v) => {
    const li = new Node(list.el, `${block}__item`, 'li');
    li.link = new Anchor(li.el, `${block}__link`, { textContent: v[0], href: v[1] });
    return li;
  });
  Object.assign(parent, list);
};

export default class Education extends Node {
  constructor(parent, sectionName) {
    super(parent, `section ${sectionName}`, 'section');

    this.heading = new Node(this.el, 'section__title', 'h2', {
      textContent: sectionName,
      id: sectionName,
    });

    this.data = [
      ['HTML Academy', 'https://htmlacademy.ru/'],
      ['learn.javascript.ru', 'https://learn.javascript.ru/'],
      ['Stepik', 'https://stepik.org/learn'],
      ['docs.microsoft.com', 'https://docs.microsoft.com/en-us/learn/'],
      ['alexanderklimov\'s "Coding for Android"', 'https://developer.alexanderklimov.ru/android/'],
    ];
    Object.assign(this.data, {
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

    createUrlList(this, this.data, 'education');
    createUrlList(this.elements[0], this.data.htmlAcademy, 'education');
    createUrlList(this.elements[2], this.data.stepik, 'education');
    createUrlList(this.elements[3], this.data.microsoft, 'education');
  }
}
