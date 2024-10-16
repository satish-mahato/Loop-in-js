function Patten3(num) {
  for (let row = 1; row <= num; row += 1) {
    let str = "";
    let spaces = num - row;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let star = row;
    for (let col = 1; col <= star; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}

Patten3(6);
