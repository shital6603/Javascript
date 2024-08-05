const sum = (a, b) => a - b;

const cube = (a) => a * a * a;




/* 
=====================     SetTimeOut Function      =====================
    console.log("Hey you just fell !! ")

setTimeout(() =>{
        console.log("Ha ha ha!!!");  
},4000);

 */


/*  
=====================     setInterval Function     ===================== 

let id =setInterval(() => {
    console.log("Hello World !!!!");
},2000);

let id2 =setInterval(() => {
    console.log("Zingalala hu hu !!");
},2000);

console.log(id); */




/* 
=========================    This with narrow function    ===================== 

const fun1 = {
    name: "shital",
    age: 21,
    gender: "female",
    prop: this,
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
}

 */



const fun = (n) => n * n; 