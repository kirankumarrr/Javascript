let promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo1")
);
let promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo2")
);
let promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo3")
);
let promises = [promise1, promise2, promise3];

Promise.allSettled(promises)
  .then((results) => results.forEach((result) => console.log(result.status)))
  .catch((err) => console.log("err", err));

// expected output:
// "fulfilled"
// "rejected"
console.log("IN PROMISES ALL IF ANY FAILES : ALL OTHER CALLS FAILES");

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log("err", err));
