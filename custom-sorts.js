function ageSort(users) {
  // Your code here
  users.sort((a, b) => {
    return a.age - b.age;
  });
  return users;
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    return (b % 2 === a % 2) ? a - b : b % 2 - a % 2;
  });
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    const reverseA = parseInt(a.toString().split("").reverse().join(""), 10);
    const reverseB = parseInt(b.toString().split("").reverse().join(""), 10);
    return reverseA - reverseB;
  });
 
}

function frequencySort(arr) {
  // Your code here
  const frequencyMap = arr.reduce((acc, num) => {
    if (acc[num]) {
      acc[num]++;
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});

  return arr.sort((a, b) => {
    if (frequencyMap[a] === frequencyMap[b]) {
      return a - b;
    }
    return frequencyMap[b] - frequencyMap[a];
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];