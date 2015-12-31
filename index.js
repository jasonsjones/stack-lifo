/**
 * @fileOverview Implementation of a stack (LIFO) data structure
 * @author Jason S. Jones
 * @license MIT
 */

(function() {
    'use strict';

    /***********************************************************
     * Stack Data Structure
     *
     * This is a 'stack' data structure that implements the notion
     * of a 'Last in First Out', or LIFO, protocol.  The underlying data
     * structure is a doubly linked list.  This linked list data structure
     * does all the heavy lifting, enabling this implementation to be a
     * simple wrapper around the linked list to leverage the applicable
     * methods and properties.  This provides a very clean and simple
     * implementation for this stack data structure.
     *
     ***********************************************************/

    // bring in the one dependency which will be the underlying
    // data structure for this stack implementation
    var LinkedList = require('dbly-linked-list');

    /**
     * Creates a new stack instance and initializes the underlying data
     * structure
     *
     * @constructor
     */
    function Stack() {
        this._list = new LinkedList();
    }

    /* Functions attached to the Stack prototype.  All stack instances
     * will share these methods, meaning there will NOT be copies made for each
     * instance.  This will be a huge memory savings since there may be several
     * different stack instances.
     */
    Stack.prototype = {

        /**
         * Determines if the stack is empty
         *
         * @returns {boolean} true if the stack is empty, false otherwise
         */
        isEmpty: function () {
            return this._list.isEmpty();
        },

        /**
         * Returns the size, or number of items on the stack
         *
         * @returns {number} the number of items on the stack
         */
        size: function () {
            return this._list.getSize();
        },

        /**
         * Pushes a new item containing 'data' onto the top of the stack
         *
         * @param {object} data the data to push on top of the stack
         */
        push: function (data) {
            return this._list.insertFirst(data);
        },

        /**
         * Removes the item from the top of the stack
         *
         * @returns {object} the item, or data, from the top of the stack
         */
        pop: function () {
            return this._list.removeFirst().getData();
        },

        /**
         * Returns the data of the item on the top of the stack,
         * but does not remove it
         *
         * @returns {object} the item, or data, from the top of the stack
         */
        peek: function () {
            return this._list.getHeadNode().getData();
        },

        /**
         * Clears the stack of all data
         */
        clear: function () {
            return this._list.clear();
        }
    };

    // export the constructor fn to make it available for use outside
    // this file
    module.exports = Stack;
}());
