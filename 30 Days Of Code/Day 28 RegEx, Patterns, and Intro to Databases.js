function main() {
    const N = parseInt(readLine(), 10);
    const array = [];
    for(let i=0; i<N;i++){
        let find = readLine().match(/.+(?=@gmail)/);
        if(find){
            array.push(find[0].split(' ')[0]);
        }
    }
    console.log(array.sort().join('\n'))
}