function isAnagram(str1, str2) {
    const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
  
    const sortedStr1 = formatStr(str1).split('').sort().join('');
    const sortedStr2 = formatStr(str2).split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  console.log(isAnagram('spar', 'rasp')); // true
  console.log(isAnagram('hello', 'ollhe')); // true
  console.log(isAnagram('hello', 'world')); // false
  