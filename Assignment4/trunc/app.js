let example ="What I'd like to tell on this topic is:";

subexample = example.substring(0,19);
// console.log(subexample);
// console.log(subexample.length);

function truncate(str, maxlength) {
    if(str.length > maxlength-1){
        let substr = str.substring(0, maxlength - 1);
        let newstr = substr + "...";
        return newstr;
    }
    return str;
}

// console.log(subexample);
// console.log(truncate(subexample, 20));
console.log(truncate(example, 20))