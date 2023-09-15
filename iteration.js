console.time()

let x = 70;

function main() {
    x = x - 1;
}

while(x != 35){
    if(x != 35){
        main()
        console.log(x);
        console.log("Decreasing the number.");
    }
}

console.log("Number has hit ", x);

console.timeEnd()