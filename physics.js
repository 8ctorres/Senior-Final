var exports = module.exports = {};

exports.motion_distance = function(t,v){
  let d = v*t;
  return "Distance = "+d+" meters"
}

exports.motion_velocity = function(t,d){
  let v = d/t;
  return "Velocity = "+v+" m/s"
}

exports.motion_time = function(d,v){
  let t = d/v;
  return "Time = "+t+" seconds";
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
  return "Acceleration = "+a+" meters/second square;"
}
