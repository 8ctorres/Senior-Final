const readline = require('readline');
const equations = require('./physics')

function getLang(){
  let lang = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  lang.question("Please select a language... (English / Español / Galego) ", function (str){
    console.log(equations.selectlanguage(str));
    lang.close();
    getInput();
  });
}

function getInput(){
    let physics = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        physics.question(equations.lang_typeofproblem(), function(str){
          if (str.toLowerCase()==equations.lang_motion()) {
            physics.question(equations.lang_unknownvalue(), function(str){
              if (str.toLowerCase()==equations.lang_distance()) {
                physics.question(equations.lang_whatisyourtime(), function(str){
                  let t = str;
                    physics.question(exports.lang_whatisyourvelocity(), function(str){
                      let v = str;
                        physics.question(exports.lang_isthereacceleration(), function(str){
                          if (str.toLowerCase()==equations.lang_no() || str.toLowerCase()==equations.lang_n()) {
                            let a = 0;
                            console.log(equations.motion_distance(t,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()==equations.lang_yes() || str.toLowerCase()==equations.lang_y()){
                            physics.question(equations.lang_whatisyouracceleration(), function(str){
                              let a = str;
                              console.log(equations.motion_distance_wa(t,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log(exports.lang_notrecognized());
                            physics.close();
                            getInput();
                          }
                        });
                      });
                });
              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your time in seconds? ", function(str){
                  let t = str;
                  physics.question("What is your distance in meters? ", function(str){
                    let d = str;
                    physics.question("Is there any acceleration? ", function(str){
                      if (str.toLowerCase()=="n" || str.toLowerCase()=="no") {
                        let a = 0;
                        console.log(equations.motion_velocity(t,d));
                        physics.close();
                      }
                      else if (str.toLowerCase()=="y" || str.toLowerCase()=="yes") {
                        physics.question("What is your acceleration in m/s2? ",function (str){
                          let a = str;
                          console.log(equations.motion_velocity_wa(t,d,a));
                          physics.close();
                        }) ;
                      }
                      else {
                        console.log("Not recognized. Please try again");
                        physics.close();
                        getInput();
                      }
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="time") {
                physics.question("What is your distance in meters? ", function(str){
                  let d = str;
                    physics.question("What is your velocity in m/s? ", function(str){
                      let v = str;
                        physics.question("Is there any acceleration? ",function(str){
                          if (str.toLowerCase()=="n" || str.toLowerCase()=="no") {
                            let a = 0;
                            console.log(equations.motion_time(d,v));
                            physics.close();
                          }
                          else if (str.toLowerCase()=="y" || str.toLowerCase()=="yes") {
                            physics.question("What is your acceleration in m/s2? ",function(str){
                              let a = str;
                              console.log(equations.motion_time_wa(d,v,a));
                              physics.close();
                            });
                          }
                          else {
                            console.log("Not recognized. Please try again");
                            physics.close();
                            getInput();
                          }
                        });
                });
                });
              }
              else if (str.toLowerCase()=="acceleration") {
                physics.question("What is your distance in meters? ", function(str){
                  let d = str;
                  physics.question("What is your velocity in m/s? ", function(str){
                    let v = str;
                    physics.question("What is your time in seconds? ", function(str){
                      let t = str;
                      console.log(equations.motion_acceleration(d,v,t));
                      physics.close();
                    });
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
                physics.question("What is your mass in kilograms? ", function(str){
                  let m = str;
                  physics.question("What is your initial speed in m/s? ", function(str){
                    let vi = str;
                    physics.question("What is your final speed in m/s? ", function(str){
                      let vf = str;
                      let v = vf-vi;
                      console.log(equations.momentum_momentum(m,v));
                      physics.close();
                    });
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your momentum? ",function(str){
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
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your momentum? ",function(str){
                  let p = str;
                  physics.question("What your mass in kilograms? ", function(str){
                    let m = str;
                    console.log(equations.momentum_velocity(p,m));
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
          else if (str.toLowerCase()=="energy" || str.toLowerCase()=="kinetic energy") {
            if (str.toLowerCase()=="energy"){
              console.log("ATTENTION. This program ONLY calculates KINETIC ENERGY, not potential or any others")
            }
            physics.question("What is your unknown value? ",function(str){
              if (str.toLowerCase()=="energy" || str.toLowerCase()=="kinetic energy") {
                physics.question("What is your mass in kilograms? ", function(str){
                  let m = str;
                  physics.question("What is your velocity in m/s? ", function(str){
                    let v = str;
                    console.log(equations.energy_energy(m,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="mass") {
                physics.question("What is your KINETIC energy in joules? ", function(str){
                  let ec = str;
                  physics.question("What is your velocity in m/s? ", function(str){
                    let v = str;
                    console.log(equations.energy_mass(ec,v));
                    physics.close();
                  });
                });
              }
              else if (str.toLowerCase()=="speed" || str.toLowerCase()=="velocity") {
                physics.question("What is your KINETIC energy in joules? ", function(str){
                  let ec = str;
                  physics.question("What is your mass in kilograms?", function(str){
                    let m = str;
                    console.log(equations.energy_velocity(ec,m));
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
          else {
            console.log("Problem not recognized. Please try again")
            physics.close();
            getInput();
          }
        });
}

let z = "Manuel, estás ahi??";
if (z=="Qué che parese?") {
  console.log("Justouche, eh??");
}

getLang();

//github 8ctorres
