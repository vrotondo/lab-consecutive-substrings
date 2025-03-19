function consecutiveSubstrings(string) {
  if (!string || string.length === 0) {
    return [];
  }

  const result = [];

  for (let startIndex = 0; startIndex < string.length; startIndex++) {
    for (let endIndex = startIndex; endIndex < string.length; endIndex++) {
      const substring = string.substring(startIndex, endIndex + 1);
      if (substring.length > 0) {
        result.push(substring);
      }
    }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
