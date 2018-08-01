var args = process.argv[2];
console.log(args);
function countLetters(input) {
  var chars = {};
  var finalChars = {};
  //var n = str.indexOf("welcome");

  for (let char of input) {
    if (!chars[char]) {
      chars[char] = input.split("").map((cur, i) => {
        finalChars[char] = [];
        if (cur === char) {
          return i;
        }
      });
    }
  }
  Object.keys(chars).map((key, index) => {
    chars[key].map((cur, i) => {
      if (cur !== undefined) {
        finalChars[key].push(cur);
      }
    });
  });

  console.log(finalChars);
}

countLetters(args);
