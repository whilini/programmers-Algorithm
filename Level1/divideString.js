function solution(s) {
  var answer = 1;
  let x = s[0];
  let sameLength = 0;
  let diffLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      sameLength += 1;
    } else {
      diffLength += 1;
    }

    if (i !== s.length - 1 && sameLength === diffLength) {
      answer += 1;
      x = s[i + 1];
      sameLength = 0;
      diffLength = 0;
      continue;
    }
  }

  return answer;
}

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
