function solution(new_id) {
  var answer = "";
  let stack = [];
  let reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim;

  answer = new_id.toLowerCase().replace(reg, "").split("");

  answer.forEach((str, idx) => {
    stack.push(str);
    for (let i = 0; i < stack.length - 1; i++) {
      if (stack[i] === "." && stack[i + 1] === ".") {
        stack.pop();
        break;
      }
    }
  });

  if (stack[0] === ".") {
    stack.shift();
  }
  if (stack[stack.length - 1] === ".") {
    stack.pop();
  }

  if (stack === "" || stack.length === 0) {
    stack.push("a");
  }
  if (stack.length > 15) {
    stack.length = 15;
    if (stack[stack.length - 1] === ".") {
      stack.pop();
    }
  }
  if (stack.length < 3 && stack[stack.length - 1] !== ".") {
    while (stack.length < 3) {
      stack.push(stack[stack.length - 1]);
    }
  }

  answer = stack.join("");
  return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
