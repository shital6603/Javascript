greet = "shital";

function scopeoffunction() {
    greet = "Dhannu";
    console.log(greet);
    function innerfunction() {
        console.log(greet)
    }
    console.log(greet);
}

console.log(greet);
scopeoffunction();