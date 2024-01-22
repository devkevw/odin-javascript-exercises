const fibonacci = function(num) {
    if (num == 0) return 0;
    if (num < 0) return 'OOPS';
    
    let first = 1;
    let second = 1; 

    for (let i = 1; i < num; i++){
        let temp = first;
        first = second; 
        second = first + temp;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
