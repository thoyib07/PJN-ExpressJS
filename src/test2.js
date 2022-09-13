function getAllPrimeNumber(num) {
    var array = [];
    var isPrime;
    for (var i = 2; i <= num; i++) {    
      for (var j = 2; (isPrime = i === j || i % j !== 0) && j <= i / 2; j++) {}
  
      isPrime && array.push(i);
    }
    return array;
}

function numberPrimeCruncher($int){
    const arrPrime = getAllPrimeNumber($int);
    var avg = 0;
    var total = 0;
    for (let i = 0; i < arrPrime.length; i++) {
        total = total + arrPrime[i];
    }

    avg = total/arrPrime.length;

    var resArr = [];
    for (let i = 0; i < arrPrime.length; i++) {
        if (arrPrime[i] > avg) {
            resArr.push(arrPrime[i]);
        }
    }
    return resArr;
}

console.log(numberPrimeCruncher(23));