function sorting(arrNumber) {
    // sorting array yang di terima dari Besar ke kecil
    // looping untuk mengakses arrNumber
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] < arrNumber[j + 1]) {
                var temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }
    return arrNumber;
}
function getTotal(arrNumber) {
    //looping untuk mengakses arrNumber
    var count = 1;
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] == arrNumber[0]) {
            count += 1
        }
    }
    return count;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return `Angka paling besar adalah ${listSort[0]} dan jumlah kemunculan sebanyak ${countHighest} kali`;

}
//   //test case untuk sorting
//   console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));
//   console.log(sorting([122, 122, 130, 100, 135, 100, 135, 150]));
//   console.log(sorting(1, 1, 1, 1));

//test case untuk getTotal
// console.log(getTotal(sorting([2, 8, 4, 6, 8, 5, 8, 4])));
// console.log(getTotal(sorting([122, 122, 130, 100, 135, 100, 135, 150])));
// console.log(getTotal([1, 1, 1, 1]));

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''