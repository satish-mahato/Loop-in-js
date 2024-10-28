function download(url, cb) {
  console.log("download from website", url);
  setTimeout(function down() {
    console.log("download Completed");
    const content = "ABCD";
    cb(content);
  }, 4000);
}
function writefile(data, cb) {
  console.log("writing  the data in a file", data);
  setTimeout(function write() {
    console.log("Complete writing the data in a file");
    const filename = "filename.txt";
    cb(filename);
  }, 5000);
}
function upload(url, file, cb) {
  console.log("Start uploading", file, "from", url);
  setTimeout(function up() {
    console.log("upload completed");
    const response = "Success";
    cb(response);
  }, 2000);
}
// download("www.satish.com", function process(content) {
//   console.log("download data is", content);
// });
// writefile("abcdef", function process(name) {
//   console.log("writing data in", name);
// });
download("www.sm12.com.np", function processDown(content) {
  console.log("we are now going to process to downloaded  data");
  writefile(content, function processWrite(filename) {
    console.log("we have downloaded and writteen the file, now time to upload");
    upload("wwww.upload.com", filename, function uploadProcess(response) {
      console.log("we have uploadeed", response);
    });
  });
});
