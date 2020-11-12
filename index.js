document.querySelector(".count").addEventListener("submit", (e) => {
  e.preventDefault();
  controlCount();
});

const controlCount = () => {
  // 1) get input text
  const sentence = document.querySelector(".input_field").value;

  // 2) change sentence to words and count vowels for each word
  const countArr = sentence.split(" ").map(countVowel); // [2, 1]
  //   console.log(countArr);

  // 3) summ all the counts
  const result = countArr.reduce((acc, cur) => acc + cur); // 3

  // 4) display it in alert
  alert(`There are ${result} vowels!`);
};

const countVowel = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of word) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }
  return count;
};
