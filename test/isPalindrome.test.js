const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
  describe('Success', () => {
    test('should return true when passed a palindrome string', () => {
      expect(isPalindrome('hannah')).toEqual(true);
      expect(isPalindrome('racecar')).toEqual(true);
    }); 

    test('should return true when passed a palindrome number', () => {
      expect(isPalindrome(1028201)).toEqual(true);
    });
  });

  describe('Failure', () => {
    test('should return false when passed a string that is not a palindrome', () => {
      expect(isPalindrome('Mr Owl ate my metal worm')).toEqual(false);
      expect(isPalindrome("Go hang a salami, I'm a lasagna hog.")).toEqual(false);
    });

    test('should return false when passed a number that is not a palindrome', () => {
      expect(isPalindrome(12345678)).toEqual(false);
    });

    test('should throw an exception if no input is provided', () => {
      expect(isPalindrome()).toEqual('input cannot be empty or null');
    });

    test('should return an error if a null input is provided', () => {
      expect(isPalindrome(null)).toEqual('input cannot be empty or null');
    });
  });
});