/* Nesta versão, o espaço em branco " " não é considerado
como duplicata, por isso pode ser repetido */

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