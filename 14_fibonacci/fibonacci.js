const fibonacci = function(x) {
    if (x<0) return "OOPS";
    if (x==0) return 0;
    
    fibArr = [1,1];
    for(let i = 0; i <= x-1; i++) {
        if(fibArr[i] > 0)
            continue;
        fibArr.push(fibArr[i-1]+fibArr[i-2])
    }
    return fibArr[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
