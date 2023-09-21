console.time();

function sleep(miliseconds) { // This function defines a true "sleep" action
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }

let x = 70;

function main() {
    x -= 1
}

while(x != 30){
    if(x != 30){
        console.log("Decreasing number", x);
        main();
        sleep(1000); // function being declared here
    }
}

if(x === 30){
    console.log("Number reached!");
}