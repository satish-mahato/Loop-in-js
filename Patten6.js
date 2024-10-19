function upperTriangle(num) {
  for (let row = 1; row <= num; row++) {
    let str = "";
    let spaces = num - row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * row - 1;
    for (let col = 1; col <= stars; col++) {
      str += "*";
    }
    console.log(str);
  }
}
function LowerTriangle(num) {
  for (let row = 1; row <= num; row++) {
    let str = "";
    let spaces = row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * (num - row) - 1;
    for (let col = 1; col <= stars; col++) {
      str += "*";
    }
    console.log(str);
  }
}
function diamond(num) {
  upperTriangle(num);
  LowerTriangle(num);
}

diamond(8);
