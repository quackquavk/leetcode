var longestPalindrome = function(s) {
    let word =[];
    s = s.split('')
    for(let i = 1 , j = s.length-2; i<s.length, j>=0; i++, j--){
        if(s[i] === s[j]  ){
            word.push(s[i])
        }
    else{
        console.log('Not found')
    }}return word;
};

console.log(longestPalindrome("babad"))
