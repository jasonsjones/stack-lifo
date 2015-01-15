
/**
 * @fileOverview Implementation of a stack (LIFO) data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */

(function() {
    'use strict';

    var LinkedList = require('dbly-linked-list');

    function Stack() {
        this._list = new LinkedList();
    }

    Stack.prototype = {

        isEmpty: function () {
            return this._list.isEmpty();
        },

        size: function () {
            return this._list.getSize();
        },

        push: function (data) {
            return this._list.insertFirst(data);
        },

        pop: function () {
            return this._list.removeFirst().getData();
        },

        peek: function () {
            return this._list.getHeadNode().getData();
        }
    };

    module.exports = Stack;
})();