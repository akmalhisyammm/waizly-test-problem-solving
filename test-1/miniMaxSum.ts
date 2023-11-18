const miniMaxSum = (arr: number[]): void => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  console.log(sum - max, sum - min);
};

miniMaxSum([1, 2, 3, 4, 5]);
