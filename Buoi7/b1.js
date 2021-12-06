const str = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";
const check = (str) => {
    let search = {}
    for(num of str) search[num] = search.hasOwnProperty(num) ? ++search[num] : 1;
    for (const index in search) {
        if(search[index]===1) return str.indexOf(index)
    }
    return -1;
    // return search;
}

console.log(check(str));
console.log(check(str2));
console.log(check(str3));