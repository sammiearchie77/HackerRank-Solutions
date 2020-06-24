function main() {
    const n = parseInt(readLine(), 10);
    
    console.log(Math.max.apply(null, n.toString(2).split("0").map(x => x.length)));
}