/* @flow */
const EventEmitter = require('events').EventEmitter;

class Store {

  constructor(items: Array) {
    this._items = items;
  }

  get allItems () { return this._items }



}

module.exports = Store;