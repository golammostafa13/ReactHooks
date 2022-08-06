let arr = [1, 2, 3, 4];

function reducer(ele, total){
    return ele + total;
}

console.log(arr.reduce(reducer, 5));