function solution(babbling) {
  var answer = 0;

  babbling.map((str) => {
    const test1 = /[^AYWM]/;
    const test2 = /A{2}|Y{2}|W{2}|M{2}/;
    let bab = str
      .replace(/aya/g, "A")
      .replace(/ye/g, "Y")
      .replace(/woo/g, "W")
      .replace(/ma/g, "M");
    if (test1.test(bab)) return;
    if (test2.test(bab)) return;

    ++answer;
  });

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
