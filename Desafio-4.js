/*Nessa versão, eu utilizei os inputs dados no exemplo
fornecido no email */

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  const input = "hello. how are you? i'm fine, thank you";
  const output = capitalizeFirstLetter(input);
  console.log(output); 
  