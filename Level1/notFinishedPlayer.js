function solution(participant, completion) {
  var answer = "";
  let obj = {};

  participant.forEach((p) => {
    obj[p] = obj[p] ? obj[p] + 1 : 1;
  });
  completion.forEach((c) => {
    obj[c] = obj[c] - 1;
  });

  Object.entries(obj).map(([k, v]) => {
    if (v === 1) answer = k;
  });

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
