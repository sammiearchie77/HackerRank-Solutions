function jumpingOnClouds(c) {
    let z = c.join('').split(1);
    let j = z.reduce((a,b)=>Math.floor(b.length/2)+a,0);
    let k = z.length; 
    return j+k-1;
}