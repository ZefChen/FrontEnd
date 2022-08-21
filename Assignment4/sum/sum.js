let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
const values = Object.values(salaries);

const sum = values.reduce((accumulator, value)=> {
    return accumulator + value;
}, 0);


console.log(sum);