//Nessa versão, o input é dado pelo usuário

function longestPalindromeSubstring(str) {
    let longestPalindrome = "";
  
    function isPalindrome(str) {
      return str === str.split("").reverse().join("");
    }
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        let substring = str.slice(i, j);
        if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
          longestPalindrome = substring;
        }
      }
    }
  
    return longestPalindrome;
  }
 
  const input = input("Digite uma frase: ");
  const result = longestPalindromeSubstring(input);
  console.log(result);
  