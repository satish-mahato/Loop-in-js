function blocking_for_loop() {
  for (let i = 0; i < 10000000; i++) {
    //something
  }
}
console.log("Starting the file");
setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);
blocking_for_loop();
let x = Promise.resolve("Satish's Promise1");
x.then(function processPromise(value) {
  console.log("whose promise ?", value);
  blocking_for_loop();
});
let y = Promise.resolve("satish Promise 2");
y.then(function processPromise(value) {
  console.log("whose promise?", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});
let z = Promise.resolve("satish Promise 3");
z.then(function processPromise(value) {
  console.log("whose promise ?", value);
});
setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);
console.log("End of the file");
