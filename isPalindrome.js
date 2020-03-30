const matchingCharacters = (characterOne, characterTwo) => {
  if (characterOne === characterTwo) return true;
  return false;
} 

const isPalindrome = (input) => {
  if (!input || input === null) return 'input cannot be empty or null';
  
  const inputToString = input.toString();
  for (let i = 0; i < inputToString.length; i++) {
    const firstCharacter = inputToString.charAt(i);
    const lastCharacter = inputToString.charAt(inputToString.length - i - 1);

    if (!matchingCharacters(firstCharacter, lastCharacter)) return false;
  }

  return true;
}

module.exports = isPalindrome;