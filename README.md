[![npm version][npm-image]][npm-url]
[![build status][circleci-image]][circleci-url]
[![dep status][dep-status-image]][dep-status-url]
[![dev dep status][dev-status-image]][dev-status-url]
[![license](https://img.shields.io/npm/l/stack-lifo.svg?style=flat-square)](LICENSE-MIT)

[npm-image]: https://img.shields.io/npm/v/stack-lifo.svg?style=flat-square
[npm-url]: http://npmjs.org/package/stack-lifo
[circleci-image]: https://img.shields.io/circleci/project/github/jasonsjones/stack-lifo.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/jasonsjones/stack-lifo
[dep-status-image]: https://img.shields.io/david/jasonsjones/stack-lifo.svg?style=flat-square
[dep-status-url]: https://david-dm.org/jasonsjones/stack-lifo
[dev-status-image]: https://img.shields.io/david/dev/jasonsjones/stack-lifo.svg?style=flat-square
[dev-status-url]: https://david-dm.org/jasonsjones/stack-lifo?type=dev

# Stack Data Structure

> A javascript implementation of a [stack](http://en.wikipedia.org/wiki/stack_%28abstract_data_type%29) data structure.

## Description

A stack data structure models the notion of 'Last in First Out', or LIFO&mdash;
image a stack of papers or plates. The last item added to the stack will be
the first item to be removed. In the parlance of a stack data structure, when
an item is added to the stack, it is said to be 'pushed' on the stack.
Similarly, when an item is removed, it is said to be 'popped' from the stack.

This particular implementation utilizes a
[linked list](https://www.npmjs.com/package/dbly-linked-list) as the
underlying data structure. This offers several benefits.

-   We can leverage the work that has already been done to implement the
    linked list.

-   This lends itself to a level of composition and abstraction which greatly
    simplifies this implementation. It provides a wrapper around only those
    methods of the linked list that we need to construct the properties of a
    stack data structure.

-   The 'push' or 'pop' operations can be completed in O(1) time.

-   No additional overhead is required to 'resize' the data structure to add
    more elements to the stack. When elements are 'pushed' on the stack, the
    underlying linked list will adjust its size dynamically.

_For specific examples and documentation, see the below sections_

### Motivation:

The main purpose of this project is revisit the basics, and focus on the
development process.

_I wholehearedly acknowledge that the basic data structure space is populated
with well-written code and efficient implementations, and one could easily grab
one of those libraries and integrate it in their project. However, the main
difference between those libraries/implementations and this one is that this is
the best implementation I have ever written. My hope is that someone else will
find this useful, but understand, this code is not the goal; this will simply
be a useful bi-product of the journey. The underlying motivation is to
understand and, more importantly, learn from the process to get to the desired
end-state&mdash;for me it is all about the joy of the journey._

#### Environment:

Although this implementation is designed to be used with
[Node.js](http://www.nodejs.org), it could be used in other contexts with minor
modifications. This implementation does not have any external dependencies
that would preclude it from being used in the browser--just include it with a
`<script>` tag and it should be good to go. _Disclaimer: I have not tested
this implementation in any other context/environment; only tested with node.js_

---

## Basic Usage

Install with npm :

```bash
npm install stack-lifo --save
```

Basic usage example below. _Note: it does not cover all the available
methods, rather just highlights the main functionality to get up and running
with this data structure. For a description of all the methods, see the
API section._

```javascript
var Stack = require('stack-lifo');
var stack = new Stack();

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

stack.peek();
// --> 'data item 3'

stack.size();
// --> 3

stack.clear();
stack.isEmpty();
// --> true
```

## API

**Available methods for a stack instance:**

-   ### isEmpty()

    Determines if the stack is empty or not. Returns true if the stack is
    empty, false otherwise.

-   ### size()

    Returns the size of the stack, or number of items

-   ### clear()

    Clears the stack of all data

-   ### push()

    Pushes an new item containing 'data' onto the top of the stack

-   ### pop()

    Removes the item from the top of the stack

-   ### peek()
    Returns the data of the item on the top of the stack,
    but does not remove it

---

## License

MIT &copy; Jason Jones
