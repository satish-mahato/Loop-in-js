function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function createPromiseWithTimeout() {
  return new Promise(function exec(res, rej) {
    console.log("Entering the executor callback in the promises");
    setTimeout(function () {
      let num = getRandomInt(10);
      console.log(num);
      if (num % 2 == 0) {
        res(num);
      } else {
        rej(num);
      }
    }, 10000);
    console.log("Exiting the executor callback in the promises");
  });
}
console.log("starting......");
let y = createPromiseWithTimeout();
console.log("we are  now waiting for promises to complete");
console.log("Currently my promises object is like", y);
y.then(
  function fulfillHandler(value) {
    console.log("Inside  fulfill handler with value", value);
  },
  function rejectionHandler(value) {
    console.log("Inside  reject handler with value", value);
  }
);
