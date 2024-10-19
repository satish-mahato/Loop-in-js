function upper(num) {
  for (let row = 1; row <= (num - 1) / 2; row++) {
    let str = "";
    let leftStar = row;
    for (let i = 1; i <= leftStar; i++) {
      str += "*";
    }
    let spaces = num - 2 * row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let rightStar = row;
    for (let k = 1; k <= rightStar; k++) {
      str += "*";
    }
    console.log(str);
  }
}
function middle(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += "*";
  }
  console.log(str);
}

function down(num) {
  for (let row = 1; row <= (num - 1) / 2; row++) {
    let str = "";
    let leftStar = (num - 1) / 2 - row + 1;
    for (let i = 1; i <= leftStar; i++) {
      str += "*";
    }
    let spaces = 2 * row - 1;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let rightStar = (num - 1) / 2 - row + 1;
    for (let k = 1; k <= rightStar; k++) {
      str += "*";
    }
    console.log(str);
  }
}

function butterfly(num) {
  upper(num);
  middle(num);
  down(num);
}
butterfly(13);
