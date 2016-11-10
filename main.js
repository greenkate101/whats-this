/**
 * Set-up
 */

if (typeof window === 'undefined') {
    global.whatsThis = whatsThis;
} else {
    global = window;
}

var obj = {
    id: 'object',
    whatsThis: whatsThis,
    inner: {
        id: 'inner-object',
        whatsThis: whatsThis
    }
};

var location = {
    state: 'Alaska',
    city: 'Anchorage'
};

function whatsThis() {
    console.log('This is...', this);
    return this;
}

function Ctor() {
    this.ownProperty = 'blah';
    console.log('This is...', this);
}

Ctor.prototype.whatsThis = whatsThis;



/**
 * Exercises
 */

var ex;

// Exercise 1

ex = whatsThis();

// this is the global object 
//nothing left of the dot

console.assert(ex === global);


// Exercise 2

ex = global.whatsThis();
//This is equal to the global object.

console.assert(ex === global);


// Exercise 3

ex = obj.whatsThis();

// this is equal to obj 
//obj is calling the method which will set this to obj

console.assert(ex === obj);

// Exercise 4

ex = obj.inner.whatsThis();
//this is the inner object
//calling the whatsThis method
console.assert(ex === obj.inner);

// Exercise 5

ex = whatsThis.call(null);
//null is an assignment value and can show no value. It makes it global.
//this is global 
console.assert(ex === global);

// Exercise 6

ex = whatsThis.call(location);

// this is equal to the location
// call takes the location argument

console.assert(ex === location);

// Exercise 7

ex = whatsThis.apply(location);
// this is equal to location
// apply takes the location argument

console.assert(ex === location);


// Exercise 8

ex = Ctor();

// this is equal to the global object 
//nothing left of the dot

console.assert(global.hasOwnProperty('ownProperty') === true);

// Exercise 9

ex = Ctor.prototype.whatsThis();

// this is equal to the Ctor.prototype
//calling the whatsThis function
console.assert(ex === Ctor.prototype);


// Exercise 10

var ctorInstance = ex = new Ctor();

// this is equal to the new object ctorInstance.

console.assert(ex === ctorInstance);


// Exercise 11

ex = ctorInstance.whatsThis();
// this is equal to ctorInstance
console.assert(ex === ctorInstance);

// Exercise 12

ex = obj.whatsThis.call(ctorInstance);
 
//call takes the argument and sets this to ctorInstance

console.assert(ex === ctorInstance);


// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);

// this is equal to the inner object 

console.assert(ex === obj.inner);
