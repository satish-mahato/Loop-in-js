function Gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(`The Gcd of  is`, a);
}
Gcd(16, 24);
