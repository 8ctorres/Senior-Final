const readline = require('readline');
const calc = require('./script.js')

let a = 0;
let b = 0;
let c = 0;

function geta(){
    let quadratica = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        quadratica.question("What is your 'a' value?", function(str){
          a = str;
          getb();
        });
      };

function getb(){
          let quadraticb = readline.createInterface({
              input: process.stdin,
              output: process.stdout
          });

              quadraticb.question("What is your 'a' value?", function(str){
                b = str;
                getc();
              });
            };

function getc(){
      let quadraticc = readline.createInterface({
                input: process.stdin,
                output: process.stdout
          });

          quadraticc.question("What is your 'a' value?", function(str){
            c = str;
            let x1 = calc.equation1(a,b,c);
            let x2 = calc.equation2(a,b,c);

            console.log("X equals "+x1+" and "+x2+" .")
          });
      };



geta();
