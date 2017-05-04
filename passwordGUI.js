const readline = require('readline');
const testString  = require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;
        console.log("Cheking password...")
        //Conditional Statements here.
        if(testString.checkLength(str)==false){
          passesAllChecks = false;
        }
        console.log("GUI ran checkLength. Result of passesAllChecks="+passesAllChecks)
        if(testString.containsUpper(str)==false){
          passesAllChecks = false;
        }
        console.log("GUI ran containsUpper. Result of passesAllChecks="+passesAllChecks)
        if (testString.containsLower(str)==false) {
          passesAllChecks = false;
        }
        console.log("GUI ran containsLower Result of passesAllChecks="+passesAllChecks)
        if (testString.containsNumerical(str)==false) {
          passesAllChecks = false;
        }
        console.log("GUI ran containsNumerical. Result of passesAllChecks="+passesAllChecks)
        if (testString.containsSpecial(str)==false) {
          passesAllchecks = false;
        }
        console.log("GUI ran containsSpecial. Result of passesAllChecks="+passesAllChecks)

        if(passesAllChecks==false){
          console.log("END of GUI. passesAllChecks="+passesAllChecks)
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
              console.log("END of GUI. passesAllChecks="+passesAllChecks)
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
