function Patten2(num) {
  for (let row = 1; row <= num; row += 1) {
    let str = "";
    for (let col = 1; col <= row; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}
Patten2(7);
