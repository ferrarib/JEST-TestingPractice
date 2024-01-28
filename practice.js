export function capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1,str.length).toLowerCase();
}

export function reverseString(str){
  let res = [];

  for(let i = 0; i < str.length; i++){
    res.unshift(str[i]);
  }

  return res.join('');
}

export class calculator {

  add(a, b) {
    return a + b;
  }

  subtract(a, b){
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b != 0){
      return a / b;
    }
    else {
      return 'Cannot divide by zero';
    }
  }

};

export function caesarCipher(str, key) {
  //Create plainText alphabet and Cipher Alphsbet
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let plainText = alphabet.split('');
  let cipherText = {};
  plainText.forEach((letter, index) => {
    let cipherIndex = (index + key) % 26;
    cipherText[letter] = plainText[cipherIndex];
  });

  let res = "";
  str.split('').forEach(letter => {
    if (cipherText[letter.toLowerCase()] != undefined){
      res += (cipherText[letter.toLowerCase()]).toUpperCase();
    }
    else {
      res += letter;
    }
  });

  return res;
}

export function analyzeArray(arr){

  let result = {
    average: null,
    min: null,
    max: null,
    length: 0
  }

  if (arr.length == 0)
    return result;
  else if (arr.length == 1){
    result.average = arr[0];
    result.min = arr[0];
    result.max = arr[0];
    result.length = 1;
    return result;
  }

  let sum = 0;
  let max = arr[0];
  let min = arr[0];

  arr.forEach(item => {
    sum += item;
    if (item > max){
      max = item;
    }
    if (item < min){
      min = item;
    }
  }) 

  result.average = sum / arr.length;
  result.max = max;
  result.min = min;
  result.length = arr.length;

  return result;
} 
