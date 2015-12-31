const EventEmitter = require('events').EventEmitter;

class Store {

  constructor(items) {
    this.items = items;
  }

}

module.exports = Store;