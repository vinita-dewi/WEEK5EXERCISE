function changeVocals(str) {
    var changeVoc = '';
    //looping untuk mengakses str
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                changeVoc += 'b';
                break;
            case 'e':
                changeVoc += 'f';
                break;
            case 'i':
                changeVoc += 'j';
                break;
            case 'o':
                changeVoc += 'p';
                break;
            case 'u':
                changeVoc += 'v';
                break;
            case 'A':
                changeVoc += 'B';
                break;
            case 'E':
                changeVoc += 'F';
                break;
            case 'I':
                changeVoc += 'J';
                break;
            case 'O':
                changeVoc += 'P';
                break;
            case 'U':
                changeVoc += 'V';
                break;
            default:
                changeVoc += str[i];

        }
    }
    return changeVoc;
}
//TEST CASE CHANGEVOCAL
// console.log(changeVocals('aeiou'));
// console.log(changeVocals('AEIOU'));

function reverseWord(str) {
    var reverse = '';
    //looping untuk mengakses str
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse;
}
// //TEST CASE REVERSEWORD
// console.log(reverseWord('abcdefg'));
// console.log(reverseWord('123daswe'));

function setLowerUpperCase(str) {
    //kamus
    var setCase = '';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz ';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

    //looping untuk mengakses str
    for (var i = 0; i < str.length; i++) {
        //looping untuk mengakses lowercase
        for (var j = 0; j < lowercase.length; j++) {
            if (str[i] == lowercase[j]) {
                setCase += str[i].toUpperCase();
            }
        }
        //looping untuk mengakses uppercase
        for (var h = 0; h < uppercase.length; h++) {
            if (str[i] == uppercase[h]) {
                setCase += str[i].toLowerCase();
            }
        }

    }
    return setCase;
}
//TEST CASE SETLOWERUPPERCASE;
// console.log(setLowerUpperCase('AbCdEf'));
// console.log(setLowerUpperCase('ABCDEF'));
// console.log(setLowerUpperCase('acbdef'))
function removeSpaces(str) {
    var noSpace = '';
    //looping untuk mengakses str
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            noSpace += str[i]
        }
    }
    return noSpace;
}
//TEST CASE REMOVESPACE
// console.log(removeSpaces('a b c d e f g'))
// console.log(removeSpaces('a         c'))

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5'
    } else {
        var chgVoc = changeVocals(name);
        // console.log(chgVoc)
        var revWord = reverseWord(chgVoc);
        // return revWord;
        var toCase = setLowerUpperCase(revWord);
        // return toCase;
        var res = removeSpaces(toCase);
        return res;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakte