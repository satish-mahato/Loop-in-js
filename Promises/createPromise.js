function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the promise");
    resolve("Done");
  });
}
setTimeout(function process() {
  console.log("Time Completed");
}, 0);

let p = createPromise();
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled with a value", value);
  },
  function rejectionHandler() {}
);
console.log("Ending");
