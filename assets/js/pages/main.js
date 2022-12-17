import Node from '../classes/Node.js';
import Person from '../sections/person.js';
import Contacts from '../sections/contacts.js';
import Skills from '../sections/skills.js';
import Languages from '../sections/languages.js';
import Summary from '../sections/summary.js';
import Code from '../sections/code.js';
import Experience from '../sections/experience.js';
import Education from '../sections/education.js';

export default class Main extends Node {
  constructor(parent) {
    super(parent, 'main', 'main');
    this.profile = new Node(this.el, 'profile');
    this.description = new Node(this.el, 'description');

    this.person = new Person(this.profile.el);
    this.contacts = new Contacts(this.profile.el, 'contacts');
    this.skills = new Skills(this.profile.el, 'skills');
    this.languages = new Languages(this.profile.el, 'languages');
    this.summary = new Summary(this.description.el, 'summary');
    this.code = new Code(this.description.el, 'code');
    this.experience = new Experience(this.description.el, 'experience');
    this.education = new Education(this.description.el, 'education');
  }
}
