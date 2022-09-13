let dictionary = {
    "a" : "!",
    "b" : "@",
    "c" : "#",
    "d" : "$",
    "e" : "%",
    "f" : "^",
    "g" : "&",
    "h" : "*",
    "i" : "(",
    "j" : ")",
    "k" : "-",
    "l" : "+",
    "m" : "1",
    "n" : "2",
    "o" : "3",
    "p" : "4",
    "q" : "5",
    "r" : "6",
    "s" : "7",
    "t" : "8",
    "u" : "9",
    "v" : "0",
    "w" : "[",
    "x" : "]",
    "y" : "{",
    "z" : "}",
}

function encrypt(input) {  
    
    const arr = input.split("");
    const arrRes = [];

    arr.map((val)=>{
        if (dictionary[val]) {
            arrRes.push(dictionary[val]);
        } else {
            arrRes.push(val);
        }
    })
    return arrRes;
}  

console.log(encrypt('T!hotib'));