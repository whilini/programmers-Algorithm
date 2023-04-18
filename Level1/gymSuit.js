function solution(n, lost, reserve) {
  var answer = 0;
  let students = new Map();

  for (i = 1; i <= n; i++) {
    students.set(i, 1);
    // if (lost.includes(i) && reserve.includes(i)) {
    //   students.set(i, 1);
    // } else if (lost.includes(i)) {
    //   students.set(i, 0);
    // } else if (reserve.includes(i)) {
    //   students.set(i, 2);
    // } else {
    //   students.set(i, 1);
    // }
  }

  lost.forEach((number) => students.set(number, students.get(number) - 1));
  reserve.forEach((number) => students.set(number, students.get(number) + 1));
  students.forEach((v, k) => {
    if (lost.includes(k)) {
      if (k > 1 && students.get(k - 1) > 1) {
        students.set(k, 1);
        students.set(k - 1, 1);
        return;
      } else if (k < n && students.get(k + 1) > 1) {
        students.set(k, 1);
        students.set(k + 1, 1);
        return;
      }
      return;
    }
  });

  students.forEach((v) => {
    if (v >= 1) {
      answer = answer + 1;
    }
  });

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); //2
console.log(solution(10, [2, 3, 4, 7], [1, 3, 6, 8])); // 9
