function stringToSignedInteger(int_str) {
    let digit = 0;
    let sign = 1;
    if (/^[+-]$/.test(int_str[0])) {
        sign = int_str[0] === '-' ? -1 : 1;
        int_str = int_str.slice(1);
    }

    let len = int_str.length - 1;

    for (let idx in int_str) {
        digit += parseInt(int_str[idx]) * (10**(len-idx));
    }

    return digit * sign;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
 
