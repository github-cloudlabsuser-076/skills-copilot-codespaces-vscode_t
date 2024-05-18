function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

const inputSentence = "hello world";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);