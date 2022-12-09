import Node from './Node.js';

export default class Anchor extends Node {
  constructor(parent, className, props) {
    super(parent, 'a', className);
    Object.assign(this.el, props);
  }
}
