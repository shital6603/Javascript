function parametersFunc(age, name) {
    console.log(`${name}'s age is ${age}`);
}

function addition(num1, num2) {
    let num3 = num1 + num2;
    console.log(`${num3}`);
}


function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
//parametersFunc(45, "Shital");



/* addition(23,45);
addition(11,90);
addition(45,87); */

printTable(4);