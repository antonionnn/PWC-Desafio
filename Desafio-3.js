/*Nessa versão, utilizei como input, aquele
fornecido no email de exemplo e também removi o erro de digitação
("input" que estava no local de "prompt") */

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
 
  const input = "babad";
  const result = longestPalindromeSubstring(input);
  console.log(result);
  