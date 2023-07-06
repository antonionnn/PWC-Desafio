//Nessa versão, o usuário que fornece o input

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  const input = prompt("Digite uma frase");
  const output = capitalizeFirstLetter(input);
  console.log(output); 
  