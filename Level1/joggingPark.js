function solution(park, routes) {
  var answer = [];
  const xLength = park[0].length;
  let yList = [];
  let start = [];
  let goStep = 0;

  park.map((locate, idx) => {
    for (i = 0; i < park[0].length; i++) {
      if (yList[i] === undefined) {
        yList[i] = locate[i];
      } else {
        yList[i] = yList[i] + locate[i];
      }
    }
    const x = locate.indexOf("S");
    if (x > -1) {
      start = [idx, x];
      return;
    }
  });
  console.log("start: ", start);

  routes.map((route) => {
    const step = parseInt(route.substr(-1));
    console.log("step: ", step, " , gostep: ", goStep);
    switch (route.charAt(0)) {
      case "E":
        goStep = start[1] + step;
        if (
          goStep <= xLength - 1 &&
          !park[start[0]].substring(start[1], goStep + 1).includes("X")
        ) {
          start[1] = goStep;
        }
        break;
      case "W":
        goStep = start[1] - step;
        if (
          goStep >= 0 &&
          !park[start[0]].substring(goStep, start[1] + 1).includes("X")
        ) {
          start[1] = goStep;
        }
        break;
      case "S":
        goStep = start[0] + step;
        if (
          goStep <= yList.length - 1 &&
          !yList[start[1]].substring(start[0], goStep + 1).includes("X")
        ) {
          start[0] = goStep;
        }
        break;
      case "N":
        goStep = start[0] - step;
        if (
          goStep >= 0 &&
          !yList[start[1]].substring(goStep, start[0] + 1).includes("X")
        ) {
          start[0] = goStep;
        }
        break;
    }
  });
  answer = start;
  return answer;
}

console.log("answer: ", solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log("answer: ", solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(
  "answer: ",
  solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])
);
