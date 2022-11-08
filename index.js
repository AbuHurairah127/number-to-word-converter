let first19Numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
let numbersDivisibleBy10 = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
let number;
const threeDigitChar = (number) => {
  let firstChar = number.toString().charAt(0);
  let last2Char = number.toString().slice(1);
  let secondChar = last2Char.toString().charAt(1);
  let last2CharOutput;
  if (last2Char < 10) {
    last2CharOutput = first19Numbers[last2Char.charAt(1)];
  } else if (last2Char < 20) {
    last2CharOutput = first19Numbers[last2Char];
  } else if (last2Char % 10 === 0 && last2Char / 10 < 9) {
    last2CharOutput = numbersDivisibleBy10[last2Char / 10 - 2];
  } else if (last2Char > 20 && last2Char < 30) {
    last2CharOutput = numbersDivisibleBy10[0].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 30 && last2Char < 40) {
    last2CharOutput = numbersDivisibleBy10[1].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 40 && last2Char < 50) {
    last2CharOutput = numbersDivisibleBy10[2].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 50 && last2Char < 60) {
    last2CharOutput = numbersDivisibleBy10[3].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 60 && last2Char < 70) {
    last2CharOutput = numbersDivisibleBy10[4].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 70 && last2Char < 80) {
    last2CharOutput = numbersDivisibleBy10[5].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 80 && last2Char < 90) {
    last2CharOutput = numbersDivisibleBy10[6].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 90 && last2Char < 100) {
    last2CharOutput = numbersDivisibleBy10[7].concat(
      first19Numbers[secondChar]
    );
  }
  if (last2CharOutput === undefined) {
    return first19Numbers[firstChar] + " hundred";
  } else {
    return first19Numbers[firstChar] + " hundred" + " " + last2CharOutput;
  }
};
const upto2Digits = (number) => {
  let last2Char = number.toString();
  let secondChar = last2Char.toString().charAt(1);
  let last2CharOutput;
  if (last2Char < 20) {
    last2CharOutput = first19Numbers[last2Char];
  } else if (last2Char % 10 === 0 && last2Char / 10 < 9) {
    last2CharOutput = numbersDivisibleBy10[last2Char / 10 - 2];
  } else if (last2Char > 20 && last2Char < 30) {
    last2CharOutput = numbersDivisibleBy10[0].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 30 && last2Char < 40) {
    last2CharOutput = numbersDivisibleBy10[1].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 40 && last2Char < 50) {
    last2CharOutput = numbersDivisibleBy10[2].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 50 && last2Char < 60) {
    last2CharOutput = numbersDivisibleBy10[3].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 60 && last2Char < 70) {
    last2CharOutput = numbersDivisibleBy10[4].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 70 && last2Char < 80) {
    last2CharOutput = numbersDivisibleBy10[5].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 80 && last2Char < 90) {
    last2CharOutput = numbersDivisibleBy10[6].concat(
      first19Numbers[secondChar]
    );
  } else if (last2Char > 90 && last2Char < 100) {
    last2CharOutput = numbersDivisibleBy10[7].concat(
      first19Numbers[secondChar]
    );
  }
  return last2CharOutput;
};
number = +prompt("Enter a number:");

// number sending to the function and taking out put
if (number.toString().length < 3) {
  console.log(upto2Digits(number));
} else if (number.toString().length === 3) {
  console.log(threeDigitChar(number));
} else if (number.toString().length === 4) {
  console.log(
    first19Numbers[number.toString().charAt(0)],
    "thousand",
    threeDigitChar(number.toString().slice(1))
  );
} else if (number.toString().length === 5) {
  console.log(
    upto2Digits(number.toString().slice(0, 2)),
    "thousand",
    threeDigitChar(number.toString().slice(2))
  );
} else if (number.toString().length === 6) {
  if (number.toString().slice(1) === "00000") {
    console.log(first19Numbers[number.toString().charAt(0)], "lac");
  } else if (number.toString().slice(1, 3) === "00") {
    console.log(
      first19Numbers[number.toString().charAt(0)],
      "lac",
      threeDigitChar(number.toString().slice(3))
    );
  } else if (number.toString().slice(3) === "000") {
    console.log(
      first19Numbers[number.toString().charAt(0)],
      "lac",
      upto2Digits(number.toString().slice(1, 3)),
      "thousand"
    );
  } else {
    console.log(
      first19Numbers[number.toString().charAt(0)],
      "lac",
      upto2Digits(number.toString().slice(1, 3)),
      "thousand",
      threeDigitChar(number.toString().slice(3))
    );
  }
}
