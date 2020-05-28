/**
 * Fonction permettant d'identifier et de renvoyer le premier mot le plus long d'une chaine de caractère
 * @param pString
 * @return string
 */
function longestWord(pString){
    //convertir string to array
    var pArray = pString.split(' ');

    //initialisation longest
    var longest = pArray[0];

    pArray.forEach(function (word) {
        if (word.length > longest.length){
            longest = word;
        }
    });

    return longest;
}

var test = longestWord('pierre feuille ciseaux');
console.log(test);
