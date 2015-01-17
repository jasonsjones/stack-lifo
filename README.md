# [![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependency status][dm-url]][dm-image]

# Stack Data Structure

## Description

This is a javascript implementation of a
[stack](http://en.wikipedia.org/wiki/stack_%28abstract_data_type%29)
data structure.

A stack data structure models the notion of 'Last in First Out', or LIFO&mdash;
image a stack of papers or plates.  The last item added to the stack will be
the first item to be removed.  In the parlance of a stack data structure, when
an item is added to the stack, it is said to be 'pushed' on the stack.
Similarly, when an item is removed, it is said to be 'popped' from the stack.

This particulary implementation utilizes a
[linked list](https://github.com/jasonsjones/doubly-linked-list) as the
underlying data structure.  This offers several benefits.

* We can leverage the work that has already been done to implement the
  linked list.

* This lends itself to a level of composition and abstraction which greatly
  simplifies this implementation.  It provides a wrapper around only those
  methods of the linked list that we need to contstruct the properties of a
  stack data structure.

*For specific examples and documentation, see the below sections*

### Motivation:

The main purpose of this project is revisit the basics, and focus on the
development process.

*I wholehearedly acknowledge that the basic data structure space is populated
with well-written code and efficient implementations, and one could easily grab
one of those libraries and integrate it in their project.  However, the main
difference between those libraries/implementations and this one is that this is
the best implementation I have ever written.  My hope is that someone else will
find this useful, but understand, this code is not the goal; this will simply
be a useful bi-product of the journey.  The underlying motivation is to
understand and, more importantly, learn from the process to get to the desired
end-state&mdash;for me it is all about the joy of the journey.*

#### Environment:

Although this implementation is designed to be used with
[Node.js](http://www.nodejs.org), it could be used in other contexts with minor
modifications.  This implementation does not have any external dependencies
that would preclude it from being used in the browser--just include it with a
`<script>` tag and it should be good to go.  _Disclaimer: I have not tested
this implementation in any other context/environment; only tested with node.js_

----

## Basic Usage

Install with npm :

```bash
npm install stack-lifo --save
```
Basic usage example below.  _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript
var Stack = require('stack-lifo');
var stack - new Stack();

stack.isEmpty();
// --> true

stack.push('data item 1');
stack.push('data item 2');
stack.push('data item 3');
stack.push('data item 4');
// stack contains:
// 'data item 4', <-- top
//  ... ,
// 'data item 1'

stack.isEmpty();
// --> false

stack.size();
// --> 4

stack.pop();
// --> removes 'data item 4'

stack.peek()
// --> 'data item 3'

stack.size();
// --> 3

stack.clear();
stack.isEmpty();
// --> true
```

## API

**Available methods for a stack instance:**

* ### isEmpty()
    Determines if the stack is empty or not. Returns true if is empty, false
    otherwise.

* ### size()
    Returns the size of the stack, or number of items

* ### clear()
    Clears the list of all nodes/data

* ### push()
    Pushes an new item containing 'data' onto the top of the stack

* ### pop()
    Removes the item from the top of the stack

* ### peek()
    Returns the data of the item on the top of the stack,
    but does not remove it

----

## License
MIT &copy; Jason Jones


[npm-image]:https://badge.fury.io/js/stack-lifo.svg
[npm-url]:http://npmjs.org/package/stack-lifo
[travis-image]:https://travis-ci.org/jasonsjones/stack-lifo.svg
[travis-url]:https://travis-ci.org/jasonsjones/stack-lifo
[dm-image]:https://david-dm.org/jasonsjones/stack-lifo
[dm-url]:https://david-dm.org/jasonsjones/stack-lifo.svg