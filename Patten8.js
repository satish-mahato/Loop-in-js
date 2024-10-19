function pattern8(num) {
  for (let rows = 1; rows <= num; rows++) {
    let str = "";

    let spaces = num - rows;

    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let counter = 1;
    for (let k = 1; k <= rows; k++) {
      str += counter;
      counter++;
    }
    let counter2 = rows - 1;
    for (let l = 1; l <= rows - 1; l++) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}
pattern8(9);
