/* Nessa versão, utilizo como input, aquele fornecido no exemplo do email */

function removeDuplicates(str) {
    const uniqueChars = new Set();
  
    for (let char of str) {
      uniqueChars.add(char);
    }
  
    const result = Array.from(uniqueChars).join("");
   
    return result;
  }
  
  const userInput = "Hello, World! OpenAI is amazing.";
  const finalOutput = removeDuplicates(userInput);
  console.log(finalOutput);
