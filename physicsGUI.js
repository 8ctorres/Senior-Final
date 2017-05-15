const readline = require('readline');
const equations = require('./physics.js')


function getInput(){
    let physics = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        physics.question("What type of problem do you want to solve? ", function(str){

          if (str.toLowerCase()=="motion") {
            physics.question("What is your unknown value? ", function(str){
              if (str.toLowerCase()=="distance") {
                physics.question("What is your time in seconds? ", function(str){
                  let t = str;
                    physics.question("What is your velocity in m/s? ", function(str){
                      let v = str;
                        console.log(equations.motion_distance(t,v));
                        physics.close();
                });
                });
              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your time in seconds? ", function(str){
                  let t = str;
                  physics.question("What is your distance in meters? ", function(str){
                    let d = str;
                      console.log(equations.motion_velocity(t,d));
                      physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="time") {
                physics.question("What is your distance in meters? ", function(str){
                  let d = str;
                    physics.question("What is your velocity in m/s? ", function(str){
                      let v = str;
                        console.log(equations.motion_time(d,v));
                        physics.close();
                });
                });
              }
              else {
                console.log("Type of value not recognized. Please try again")
                physics.close();
                getInput();
              }
          });
          }

          else if (str.toLowerCase()=="force") {
            physics.question("What is your unknown value? ", function(str){
              if (str.toLowerCase()=="force") {
                physics.question("What is your mass in kilograms? ", function(str){
                  let m = str;
                  physics.question("What is your acceleration in meters/second square? ", function(str){
                    let a = str;
                    console.log(equations.force_force(m,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your force in Newtons? ", function(str){
                  let f = str;
                  physics.question("What is your acceleration in meters/second square? ", function(str){
                    let a = str;
                    console.log(equations.force_mass(f,a));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="acceleration") {
                physics.question("What is your force in Newtons? ", function(str){
                  let f = str;
                  physics.question("What is your mass in kilograms? ", function(str){
                    let m = str;
                    console.log(equations.force_acceleration(f,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log("Value not recognized. Please try again");
                physics.close();
                getInput();
              }
            });
          }
          else if (str.toLowerCase()=="momentum") {
            console.log("Can't do momentum problems. Coming soon in future updates");
            physics.close();
          }
          else if (str.toLowerCase()=="energy") {
            console.log("Can't do energy problems. Coming soon in future updates");
            physics.close();
          }
          else {
            console.log("Problem not recognized. Please try again")
            physics.close();
            getInput();
          }
        });
}

getInput();
