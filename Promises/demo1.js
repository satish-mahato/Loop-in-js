function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownlading() {
      let data = "dummy data";
      console.log("download Completed");
      resolve(data);
    }, 7000);
  });
}
console.log("start");
let promiseObj = fetchData("satish websites");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("End");
