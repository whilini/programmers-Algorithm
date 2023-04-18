function solution(id_list, report, k) {
  var answer = [];
  let reported = {};
  let reportedResult = [];

  for (i = 0; i < id_list.length; i++) {
    answer.push(0);
  }

  if (id_list.length < k) answer;

  id_list.forEach((el) => {
    reported[el] = 0;
  });

  const newList = new Set(report);

  newList.forEach((rp) => {
    const name = rp.split(" ")[1];
    reported[name] = reported[name] + 1;
  });

  Object.entries(reported).map(([key, v]) => {
    if (v >= k) {
      reportedResult.push(key);
    }
  });

  newList.forEach((rp) => {
    const reporterName = rp.split(" ")[0];
    const reportedName = rp.split(" ")[1];

    if (reportedResult.includes(reportedName))
      ++answer[id_list.indexOf(reporterName)];
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
