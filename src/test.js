const gcd = function (num1, num2) {
  for (let i = Math.min(num1, num2); i > 0; i--) {
    if (num % i === num2 % i && i >= Math.min(num1, num2)) {
      return i;
    }
  }
};

gcd(100, 56);
