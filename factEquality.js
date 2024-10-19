console.log("abc" == "abc");
let x = "abc";
let y = "abc";
console.log(x == y);

let z = new String("abc");
let a = String("abc");
console.log(z);
console.log(a == z);
console.log(a == x);
console.log(z == a);
console.log(a === z);
console.log(a === x);
console.log(z === a);
console.log("abc" == new String("abc"));
