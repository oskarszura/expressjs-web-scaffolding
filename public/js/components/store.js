/* @flow */
const EventEmitter = require('events').EventEmitter;

class Store {

  constructor(items: Array) {
    this.items = items;
  }

}

module.exports = Store;