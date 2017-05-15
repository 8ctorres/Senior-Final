const readline = require('readline');
const calc = require('./quadratic.js')

let a = 0;
let b = 0;
let c = 0;

function getNumbers(){
    let quadratic = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        quadratic.question("What is your 'a' value? ", function(str){
          a = str;
          quadratic.question("What is your 'b' value? ", function(str){
            b = str;
            quadratic.question("What is your 'c' value? ", function(str){
             c = str;

             let x1 = calc.equation1(a,b,c);
             let x2 = calc.equation2(a,b,c);

             console.log("\n X equals "+x1+" and "+x2+"\n")

             quadratic.close();
             });
          });
        });
}

getNumbers();
