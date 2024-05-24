var magicalString=(n)=> {
    let s = [1, 2, 2]; 
    let index = 2; 
    
    while (s.length < n) {
        let nextNum = s[s.length - 1] === 1 ? 2 : 1; 
        
        for (let i = 0; i < s[index]; i++) {
            s.push(nextNum);
        }
        
        index++; 
    }
    s = s.splice(0,n)
    let count = 0;
    for (let num of s) {
        if (num === 1) {
            count++;
        }
    }
    return count;
}
    

console.log(magicalString(7))