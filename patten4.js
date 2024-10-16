function patten4(num) {
  for (let row = 1; row <= num; row += 1) {
    let str = "";
    let spaces = num - row;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let star = 2 * row - 1;
    for (let col = 1; col <= star; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}
patten4(9);
