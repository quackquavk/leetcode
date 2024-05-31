/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    s = s.trim();
    s = s.split('')
    let e =false;
    while(e === false && s.length >0){
         let index = s.length-1
        if(s[0] === s[index]){
            s.splice(index,1)
            s.splice(0 ,1) 
        }else{
            e =true
            break
        }
    }return s.length

};

console.log(minimumLength("cabaabac"))