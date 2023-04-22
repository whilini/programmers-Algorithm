function solution(players, callings) {
  var answer = [];
  let prev = new Map();
  let res = new Map();
  players.forEach((i, idx) => {
    prev.set(idx, i);
    res.set(i, idx);
  });

  callings.forEach((i) => {
    const player = res.get(i);
    const prevPlayer = prev.get(player - 1);
    res.delete(i);
    prev.delete(player);
    res.set(i, player - 1);
    prev.set(player - 1, i);
    res.set(prevPlayer, player);
    prev.set(player, prevPlayer);
  });

  res.forEach((v, k) => {
    answer[v] = k;
    console.log(v, k);
  });
  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
