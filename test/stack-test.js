/* globals describe it beforeEach afterEach */

var expect = require('chai').expect;
var Stack = require('../');

describe('Stack Unit Tests', function() {
    var stack;

    beforeEach(function() {
        stack = new Stack();
    });

    afterEach(function() {
        stack = null;
    });

    it('instantiates a stack instance', function() {
        expect(stack).to.exist;
    });

    it('is empty when first instantiated', function() {
        expect(stack.isEmpty()).to.be.true;
        expect(stack.size()).to.equal(0);
    });

    it('pushes data onto the stack', function() {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push({
            id: 1,
            payload: {
                number: 42,
                desc: 'the answer'
            }
        });
        expect(stack.size()).to.equal(4);
    });

    it('pops data from the top of the stack', function() {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push({
            id: 1,
            payload: {
                number: 42,
                desc: 'the answer'
            }
        });
        expect(stack.size()).to.equal(4);
        var top = stack.pop();
        expect(JSON.stringify(top)).to.equal(
            '{"id":1,"payload":{"number":42,"desc":"the answer"}}'
        );

        expect(stack.size()).to.equal(3);
        expect(stack.pop()).to.equal('and yet some more...');
        expect(stack.size()).to.equal(2);
    });

    it('peeks at the data on top of the stack', function() {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');

        expect(stack.size()).to.equal(3);
        expect(stack.peek()).to.equal('and yet some more...');
        expect(stack.size()).to.equal(3);
    });

    it('clears the stack of all data', function() {
        stack.push('some test data');
        stack.push('some more test data');
        stack.push('and yet some more...');
        stack.push('and how about some more...');
        expect(stack.size()).to.equal(4);
        stack.clear();
        expect(stack.size()).to.equal(0);
        expect(stack.isEmpty()).to.equal(true);
    });
});
