const removeFromArray = function() {
    let argsArray = Array.from(arguments)
    const arr = argsArray[0];
    const elmts = argsArray.slice(1);
    let newArr = [];
    
    for (const e of arr) {
        if (!(elmts.includes(e))) newArr.push(e);
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
