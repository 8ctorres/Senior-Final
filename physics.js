var exports = module.exports = {};

exports.motion_distance = function(t,v){
  let d = 0;
  d += t*v;
  console.log("d = "+d);
  return "Distance = "+d+" meters";
}

exports.motion_distance = function(t,v,a){
  let d = 0;
  d += v*t;
  d = d + 0.5*a*t*t;
  return "Distance = "+d+" meters";
}

exports.motion_velocity = function(t,d){
  let v = d/t;
  return "Velocity = "+v+" m/s";
}

exports.motion_velocity = function(t,d,a){
  let v = d-(0.5*a*t*t);
  v = v/t;
  return "Velocity = "+v+" m/s";
}

exports.motion_time = function(d,v){
  let t = d/v;
  return "Time = "+t+" seconds";
}

exports.motion_time = function(d,v,a){
  return "I actually don't know how to do that. Go ask your physics teacher.";
}

exports.motion_acceleration = function(d,v,t){
  let a = d - (v*t);
  a = a / (0.5*t*t);
  return "Acceleration = "+a+" meters/second square";
}

exports.force_force = function(m,a){
  let f = m*a;
  return "Force = "+f+" Newtons";
}

exports.force_mass = function(f,a){
  let m = f/a;
  return "Mass = "+m+" kilograms";
}

exports.force_acceleration = function(f,m){
  let a = f/m;
  return "Acceleration = "+a+" meters/second square";
}

exports.momentum_momentum = function(m,v){
  let p = m*v;
  return "Momentum = "+p;
}

exports.momentum_mass = function(p,v){
  let m = p/v;
  return "Mass ="+m+" kilograms";
}

exports.momentum_velocity = function(p,m){
  let v = p/m;
  return "Velocity = "+v+" m/s";
}

exports.energy_energy = function(m,v){
  let ec = m*v*v;
  ec = ec/2;
  return "Kinetic energy = "+ec+" joules";
}

exports.energy_mass = function(ec,v){
  let m = 2*ec;
  m = m/(v*v);
  return "Mass = "+m+" kilograms";
}

exports.energy_velocity = function(ec,m){
  let v = 2*ec;
  v = v/m;
  v = Math.sqrt(v);
  return "Velocity = "+v+" m/s"
}

let lang = "";

exports.selectlanguage = function(str){
  if (str.toLowerCase()=="en" || str.toLowerCase()=="eng" || str.toLowerCase()=="english") {
    lang = "eng";
    return "English selected";
  }
  else if (str.toLowerCase()=="es" || str.toLowerCase()=="esp" || str.toLowerCase()=="español") {
    lang = "esp";
    return "Español seleccionado";
  }
  else if (str.toLowerCase()=="gl" || str.toLowerCase()=="gal" || str.toLowerCase()=="galego") {
    lang = "gal"
    return "Galego seleccionado";
  }
  else {
    return "Language not recognized. English is automatically assigned";
  }
}

exports.typeofproblem = function(){
  if (lang=="eng") {
    return "What type of problem do you want to solve? "
  }
  else if (lang=="esp") {
    return "¿Qué tipo de problema quieres resolver? "
  }
  else if (lang=="gal") {
    return "Qué tipo de problema qués resolver? "
  }
}
 //github 8ctorres
