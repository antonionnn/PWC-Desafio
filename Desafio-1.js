function reverseWords (sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(" "); 
    return reversedSentence;
}

let sentence = prompt("Digite a frase: ");
let reversedSentence = reverseWords(sentence);
console.log(reversedSentence);