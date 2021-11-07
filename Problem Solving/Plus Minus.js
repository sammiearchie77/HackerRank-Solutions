function plusMinus(arr) {
    // Write your code here
    let posSum = 0;
    let negSum = 0;
    let zeroes = 0;
    arr.forEach(el => {
        if(el === 0){
            zeroes++
        } else if(el >= 1) {
            posSum++
        } else if(el < 0){
            negSum++
        }
    })
    negSum /= arr.length
    posSum /= arr.length
    zeroes /= arr.length
    console.log(posSum);
    console.log(negSum);
    console.log(zeroes)
}
