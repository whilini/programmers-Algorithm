function solution(ingredient) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4 && stack.slice(-4).toString() === "1,2,3,1") {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
