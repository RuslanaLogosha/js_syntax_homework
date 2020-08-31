// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку \
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord (string = "") {
  // Write code under this line
  let words = string.split(" ");
  let longestWord = words[0];


  for(const word of words) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
    
  }

  return longestWord;
  
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));




// let string = 'The quick brown fox jumped over the lazy dog';
// let words;
// words = string.split(' ');
// let longestWord = words[0];


// for(const word of words) {
//   if(word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(longestWord);
// 'jumped'