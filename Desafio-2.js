/* Nesa versão, o espaço em branco (" ") é considerado
como duplicata, por isso, não é repetido mais de uma vez */

function removeDuplicates(str) {
    const uniqueChars = new Set();
  
    for (let char of str) {
      uniqueChars.add(char);
    }
  
    const result = Array.from(uniqueChars).join("");
   
    return result;
  }
  
  const userInput = prompt("Digite a frase: ");
  const finalOutput = removeDuplicates(userInput);
  console.log(finalOutput);