const a = [1,2,3];
const b = [0];
const c = [9];
// const d = [1,9,9];

const insert = arr => {
    arr =  arr.join("");
    arr = Number(arr);
    arr = ++arr;
    return arr.toString().split("").map(
        user => Number(user)
    )
    // return arr;
}

console.log(insert(a));
console.log(insert(b));
console.log(insert(c));
// console.log(insert(d));