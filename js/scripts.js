function pigLatin (text) {
  let wordArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  let pigArray = [];
  for (let index = 0; index < wordArray.length; index++) {
  let newArray = wordArray[index].split("");
    if (vowels.includes(newArray[0].toLowerCase())) {
      pigArray.push(wordArray[index] + "way ");
    } else { 
      for (let index = 0; index < newArray.length; index++) {         // for each letter
        if (vowels.includes(newArray[index].toLowerCase())) {         // if letter is a vowel
          let array2 = newArray.slice(index, (newArray.length));      // slice the array at the current index
          let array1 = newArray.slice(0, index);                      //(array1 = first half) (array2 = second helf)
          pigArray.push(array2.join("") + array1.join("") + "ay ");   //array2 + array1 + "ay"
          break;                                                      // break
        }
      }
    }
  } 
  return pigArray.join("");
}        
      