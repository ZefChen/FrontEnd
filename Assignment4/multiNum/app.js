let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(object){
    object.width = object.width * 2;
    object.height = object.height * 2;
}

multiplyNumeric(menu);

// after the call
// menu = {width: 400,height: 600,title: "My menu"};

console.log(menu);