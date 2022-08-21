let Ename = "123@ .com";

// let atIndex = Ename.indexOf("@");

function checkEmailId(string){
    if(string.includes("@") || string.includes(".")){

        // string = string.trim();

        var atIndex = string.indexOf("@");
        var dotIndex = string.indexOf(".");

        if(atIndex < dotIndex - 1){
            return true;
        }
        return false;
    }
    return false;
}

let checkResult = checkEmailId(Ename);

console.log(checkResult);
// console.log(Ename.indexOf("@"));
// console.log(Ename.trim().indexOf("."));