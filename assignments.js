function isAnagram(str1, str2) {
    const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
  
    const sortedStr1 = formatStr(str1).split('').sort().join('');
    const sortedStr2 = formatStr(str2).split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  console.log(isAnagram('spar', 'rasp')); // true
  console.log(isAnagram('hello', 'ollhe')); // true
  console.log(isAnagram('hello', 'world')); // false
  



function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lower case
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the string
  const reversedStr = normalizedStr.split('').reverse().join('');
  // Check if the normalized string is equal to its reverse
  return normalizedStr === reversedStr;
}



function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const lowerCaseStr = str.toLowerCase();
  let count = 0;
  for (let char of lowerCaseStr) {
    if (vowels.has(char)) {
      count++;
    }
  }
  return count;
}



function calculateTime(n) {
  const startTime = new Date().getTime();
  
  // Calculate sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date().getTime();
  const timeTaken = (endTime - startTime) / 1000;
  return timeTaken;
}
