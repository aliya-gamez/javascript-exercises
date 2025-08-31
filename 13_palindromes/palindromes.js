const palindromes = function (x) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanStringInput = x
        .toLowerCase()
        .split('')
        .filter((x) => alphanumerical.includes(x))
        .join('');
    
    let strLength = cleanStringInput.length;
    let strReversed = "";
    for(let i = strLength-1; i >= 0; i--) {
        strReversed += cleanStringInput[i];
    }
    if(cleanStringInput==strReversed)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
