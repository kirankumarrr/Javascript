let promiseRejectedFoo1 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo1")
);
let promiseResolvedFoo2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "foo2")
);
let promiseRejectedFoo3 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo3")
);
let promiseResolvedFoo4 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "foo2")
);

let promises = [promiseRejectedFoo1, promiseResolvedFoo2, promiseRejectedFoo3];

/**
 * Returns all the promises fulfilled or rejected
 * 
 * Promise.allSettled([]): This method also takes an array of Promises as input. It returns a single Promise that resolves after all of the given Promises have either resolved or rejected, with an array of objects that each describe the outcome of each Promise. Each object has a status property indicating whether the Promise was fulfilled or rejected, and a value or reason property with the fulfillment value or rejection reason.
*/

// Promise.allSettled(promises)
//     .then((results) => {
//         console.log('---------Promise.allSettled----------------', results)
//     })
//     .catch((err) => console.log("err", err));


/**
 *  If any of the Promises fail (i.e., reject), the entire Promise.all([]) 
 * 
 * Promise.all([]): This method takes an array of Promises as input. It returns a single Promise that resolves when all of the Promises in the iterable argument have resolved, or rejects with the reason of the first Promise that rejects.fails.
*/
// Promise.all(promises)
//     .then((values) => {
//         console.log('---------Promise.all Failed----------------')
//         console.log(values);
//     })
//     .catch((err) => console.log("err", err));

// Promise.all([promiseResolvedFoo2, promiseResolvedFoo4])
//     .then((values) => {
//         console.log('---------Promise.all Pass----------------')
//         console.log(values);
//     })
//     .catch((err) => console.log("err", err));

/**
 * Promise.any([]): This method takes an array of Promises as input. It returns a single Promise that resolves as soon as any of the promises in the iterable resolves. If all of the promises are rejected, Promise.any([]) rejects with an AggregateError, a new subclass of Error that groups together individual errors.
*/
Promise.any([promiseRejectedFoo1, promiseResolvedFoo2])
    .then((values) => {
        console.log('---------Promise.any Failed----------------', values)
    })
    .catch((err) => console.log("err", err));

Promise.any([promiseResolvedFoo2, promiseResolvedFoo4])
    .then((values) => {
        console.log('---------Promise.any Pass----------------', values)
    })
    .catch((err) => console.log("err", err));


/**
 * Rejected or Resolved Promise first.
 *
 * Promise.race([]): This method also takes an array of Promises as input. It returns a Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects, with the value or reason from that Promise.
*/

// Using Promise.race to handle the fastest resolution or rejection
// Promise.race([promiseRejectedFoo1, promiseResolvedFoo2])
//     .then((value) => {
//         console.log('---------Promise.race Resolved----------------')
//         console.log('Value:', value);
//     })
//     .catch((err) => {
//         console.log('---------Promise.race Rejected----------------')
//         console.error('Error:', err);
//     });

// Promise.race([promiseResolvedFoo2, promiseResolvedFoo4])
//     .then((value) => {
//         console.log('---------Promise.race Resolved----------------')
//         console.log('Value:', value);
//     })
//     .catch((err) => {
//         console.log('---------Promise.race Rejected----------------')
//         console.error('Error:', err);
//     });

