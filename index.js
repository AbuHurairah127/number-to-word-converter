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
  if (last2CharOutput === undefined) {
    return first19Numbers[firstChar] + " hundred";
  } else {
    return first19Numbers[firstChar] + " hundred" + " " + last2CharOutput;
  }
};
number = +prompt("Enter a number:");
if (number < 20) {
  console.log(first19Numbers[number]);
} else if (number % 10 === 0 && number / 10 < 9) {
  console.log(numbersDivisibleBy10[number / 10 - 2]);
} else if (number > 20 && number < 30) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[0], first19Numbers[secondChar]);
} else if (number > 30 && number < 40) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[1], first19Numbers[secondChar]);
} else if (number > 40 && number < 50) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[2], first19Numbers[secondChar]);
} else if (number > 50 && number < 60) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[3], first19Numbers[secondChar]);
} else if (number > 60 && number < 70) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[4], first19Numbers[secondChar]);
} else if (number > 70 && number < 80) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[5], first19Numbers[secondChar]);
} else if (number > 80 && number < 90) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[6], first19Numbers[secondChar]);
} else if (number > 90 && number < 100) {
  let secondChar = number.toString().charAt(1);
  console.log(numbersDivisibleBy10[7], first19Numbers[secondChar]);
} else if (number.toString().length === 3) {
  console.log(threeDigitChar(number));
} else if (number.toString().length === 4) {
  console.log(
    first19Numbers[number.toString().charAt(0)],
    "thousand",
    threeDigitChar(number.toString().slice(1))
  );
}
