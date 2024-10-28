function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting the download data from", url);
    setTimeout(function down() {
      console.log("Download Completed");
      const content = "ABCDE";
      resolve(content);
    }, 6000);
  });
}
function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting writing a file", data);
    setTimeout(function write() {
      console.log("Completed a writing in a file");
      const fileName = "file1.txt";
      resolve(fileName);
    }, 2000);
  });
}

function upload(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started Uploading", file, "on", url);
    setTimeout(function up() {
      console.log("Uploaded done");
      const response = "Success";
      resolve(response);
    }, 2000);
  });
}

download("www.abc.com")
  .then(function processDown(value) {
    console.log("downloading done from the following value", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("data is written in the file name", value);
    return upload(value, "www.upload.com");
  })
  .then(function processUpload(value) {
    console.log("we have upload with", value);
  });
