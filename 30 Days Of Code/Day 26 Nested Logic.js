function processData(input) {
    const lines = input.split('\n');
    const actualReturned = lines[0].split(' ').map(Number);
    const expectedReturn = lines[1].split(' ').map(Number);

    if (actualReturned[2] > expectedReturn[2]) {
        console.log(10000);
    } 
    else if (actualReturned[2] < expectedReturn[2]) {
        console.log(0);
    } 
    else if (actualReturned[1] > expectedReturn[1]) {
        const diff = actualReturned[1] - expectedReturn[1];
        console.log(diff * 500);
    } 
    else if (actualReturned[1] < expectedReturn[1]) {
        console.log(0);
    } 
    else if (actualReturned[0] > expectedReturn[0]) {
        const diff = actualReturned[0] - expectedReturn[0];
        console.log(diff * 15);
    } 
    else {
        console.log(0);
    }
} 