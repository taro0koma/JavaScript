function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    // for-of文で文字列sを一文字ずつ検証する
    for (const letter of s) {
        // Separate vowels and consonants
        if (letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u'
           ) {
            // aeiouのどれかならvowelsに結合していく
            vowels += letter;
        } else {
            // aeiou以外ならconsonantsに結合していく
            consonants += letter;
        }
    }
    
    // vowelsを一文字ずつ出力していく
    // iteratorを使って文字列のcharAt(index)で文字を抽出する
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels.charAt(i));
    }
    
    // consonantsを一文字ずつ出力していく
    // こっちはfor-of文で、split('')←一文字単位配列化で抽出する
    for (const letter of consonants.split('')) {
        console.log(letter);
    }
}
