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
            physics.question("What is your unknown value? ", function(str){
              if (str.toLowerCase()=="momentum") {
                physics.question("What is your mass in kilograms? ",function(str){
                  let m = str;
                  physics.question("What is your initial velocity in m/s? ", function(str){
                    let vi = str;
                    physics.question("What is your final velocity in m/s? ", function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_momentum(m,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your momentum? ", function(str){
                  let p = str;
                  physics.question("What is your initial speed in m/s? ", function(str){
                    let vi = str;
                    physics.question("What is your final speed in m/s? ", function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_mass(p,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="velocity" || str.toLowerCase()=="speed") {
                physics.question("What is your momentum? ", function(str){
                  let p = str;
                  physics.question("What is your mass in kilograms? ", function(str){
                    let m = str;
                    console.log(equations.momentum_velocity(p,m));
                    physics.close();
                  });
                });
              }
              else {
                console.log("Value not recognized. Please try again");
                physics.close();
              }
            });
          }
          else if (str.toLowerCase()=="kinetic energy" || str.toLowerCase()=="energy") {
            if (str.toLowerCase()=="energy") {
              console.log("ATTENTION. This problem solves for KINETIC ENERGY only")
            }
            physics.equation("What is your unknown value? ", function(str){
              if (str.toLowerCase()=="energy") {
                physics.question("What is your mass in kilograms? ",function(str){
                  let m = str;
                  physics.question("What is your velocity? ", function(str) {
                    let v = str;
                    console.log(equations.energy_energy(m,v));
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {

              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {

              }
              else {
                console.log("Value not recognized. Please try again");
                physics.close();
              }
            });
          }
          else {
            console.log("Problem not recognized. Please try again")
            physics.close();
            getInput();
          }
        });
}

getInput();
