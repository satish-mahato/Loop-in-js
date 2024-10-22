function download(url) {
  console.log("Started downloading content from ", url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("completed downloaded data in 5s");
      const content = "ABcedd";
      res(content);
    }, 5000);
  });
}
x = download("www.xyz.com");
x.then(
  function fulfillHandler1(value) {
    console.log("Content download is 1 ", value);
    return "New Promise String";
  },
  function rejectionHandler1(value) {
    console.log("reject with", value);
  }
).then(function newFullFillHandler(value) {
  console.log("value from chained Promise", value);
});
