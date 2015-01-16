/**
 * @fileOverview Implementation of a stack (LIFO) data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */

(function() {
    'use strict';

    /***********************************************************
     * Stack Data Structure
     *
     * This is a 'stack' data structure that implements the notion
     * of 'Last in First Out', or LIFO.  The underlying data structure
     * is a doubly linked list.  This linked list data structure does
     * all the heavy lifting, enabling this implementation to be a simple
     * wrapper around the linked list to leverage the applicable methods
     * and properties.  This provides a very clean and simple implementation
     * for this stack data structure.
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
         * Determines if the list is empty
         *
         * @returns {boolean} true if the list is empty, false otherwise
         */
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
