function temperatura(cel=0){
    let far = (cel * 1.8) + 32
    return far;
}
let res = temperatura(30);
console.log(res);