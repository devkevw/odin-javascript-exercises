const sumAll = function(n, m) {
    // input validation
    if (typeof n != "number" || typeof m !='number') return 'ERROR';  
    if (n < 0 || m < 0 ) return 'ERROR';

    if (n > m) {  // swap variables
        let temp = n;
        n = m;
        m = temp;
    }
    
    let sum = 0
    for (let i = n; i <= m; i++) {
        sum += i;
    }

    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
