function multiplyBy(multiplier: number): (value: number) => number {
  // Closure captures the multiplier variable
  return (value: number): number => {
    return value * multiplier;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
