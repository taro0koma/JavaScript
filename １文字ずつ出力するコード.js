function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    // For each letter in string s
    for (const letter of s) {
        // Separate vowels and consonants
        if (letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u'
           ) {
            // Append vowel to vowel string
            vowels += letter;
        } else {
            // Append consonant to consonant string
            consonants += letter;
        }
    }
    
    // Print each vowel
    // This loop iterates over each character in the vowels string in order
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels.charAt(i));
    }
    
    // Print each consonant
    // This loop iterates over each letter in an array consisting of the consonants
    for (const letter of consonants.split('')) {
        console.log(letter);
    }
}