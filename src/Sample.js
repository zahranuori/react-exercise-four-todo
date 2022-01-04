let number = [1,2,3,5,7,9,11,,19,99,911];
let filterNumber = number.filter(zahra => zahra >10);
let fard= number.filter((num)=> num % 2 === 1)
let name =["sara","reza",'zahra',"mobin","masom"];
let age = name.filter((age)=> age == 'r');
console.log(age);
console.log(number.sort((a, b) => a - b));