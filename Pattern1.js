function patten1(num) {
  for (row = 1; row <= num; row += 1) {
    let str = "";
    for (col = 1; col <= num; col += 1) {
      str += "*";
    }
    console.log(str);
  }
}

patten1(5);
