import Node from './Node.js';

export default class Anchor extends Node {
  constructor(parent, className, attrs) {
    super(parent, className, 'a', attrs);
  }
}
