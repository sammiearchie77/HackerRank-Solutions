function getTotalX(a, b) {
    // Write your code here
    let result = 0;
    let index = 1;
    let cloneA = a.splice(1, a.length); 
    while(a[0] * index <= b[0]) {
        if(
         cloneA.every(item => (a[0] * index) % item === 0)
          &&
          b.every(item => item % (a[0] * index) === 0)
         ) {
            result++;
        }
        index++;
    }
    return result;
}
