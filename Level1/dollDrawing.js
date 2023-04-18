function solution(board, moves) {
  var answer = 0;
  let virticalBoard = [];
  let basket = [];
  board.forEach((el, idx1) => {
    el.forEach((i, idx2) => {
      if (!virticalBoard[idx2]) virticalBoard[idx2] = [];
      if (i !== 0) {
        virticalBoard[idx2].push(i);
      }
    });
  });

  moves.forEach((out, idx) => {
    const doll = virticalBoard[out - 1].shift();
    if (doll && basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
      //   if (idx > 1 && basket[idx - 1] === basket[idx]) {
      //     basket.splice(idx - 1, 2);
      //     answer = answer + 2;
      //   }
    } else if (doll) {
      basket.push(doll);
    }
  });
  console.log(basket);

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); // 4
