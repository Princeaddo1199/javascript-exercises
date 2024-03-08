const fibonacci = function(countArg) {
    let count
    if (typeof countArg !== 'number'){
        count = parseInt(countArg)
    }else{
        count = countArg
    }
    if (count < 0) return "OOPS"
    if (count == 0) return 0;

    let n0 = 1;
    let n1 = 0;

    for (let i =2; i <= count; i++){
        let current = n0 + n1;
        n1 = n0;
        n0 = current
    }
return n0
};
fibonacci(5)

// Do not edit below this line
module.exports = fibonacci;
