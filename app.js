var minRemoveToMakeValid = function(s) {
    s = s.split('');
    let sum=0;
    let truth = false;
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            sum += 1
        }if(s[i]===')'){
            sum -= 1;
        }if(i+1===s.length){
          truth=true;
          console.log(truth)
        }
    }if(sum < 0 && truth ){
      s.splice(s.indexOf(')'),1)
    }
    return s.join('');;
};
console.log(minRemoveToMakeValid("a)b(c)d"))