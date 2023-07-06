/* Nessa versão, utilizo o input fornecido no exemplo do email, ao invés
de perguntar ao usúario, como na versão anterior */

function reverseWords (sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(" "); 
    return reversedSentence;
}

let sentence = "Hello, World! OpenAI is amazing.";
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);