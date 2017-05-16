var exports = module.exports = {};

exports.motion_distance = function(t,v){
  let d = 0;
  d = t*v;
  return "Distance = "+d+" meters";
}

exports.motion_distance_wa = function(t,v,a){
  let d = 0;
  d = v*t;
  d = d + 0.5*a*t*t;
  return "Distance = "+d+" meters";
}

exports.motion_velocity = function(t,d){
  let v = d/t;
  return "Velocity = "+v+" m/s";
}

exports.motion_velocity_wa = function(t,d,a){
  let v = d-(0.5*a*t*t);
  v = v/t;
  return "Velocity = "+v+" m/s";
}

exports.motion_time = function(d,v){
  let t = d/v;
  return "Time = "+t+" seconds";
}

exports.motion_time_wa = function(d,v,a){
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

exports.lang_typeofproblem = function(){
  if (lang=="eng") {
    return "What type of problem do you want to solve? (Motion / Force / Momentum / Kinetic Energy)";
  }
  else if (lang=="esp") {
    return "¿Qué tipo de problema quieres resolver? (Movimiento / Fuerza / Momento / Energía cinética)";
  }
  else if (lang=="gal") {
    return "Qué tipo de problema qués resolver? (Movemento / Forza / Momento / Enerxía cinética)";
  }
}

exports.lang_unknownvalue = function(){
  if (lang=="eng") {
    return "What is your unknown value? (Distance / Time / Velocity / Acceleration) ";
  }
  else if (lang=="esp") {
    return "¿Cuál es tu valor desconocido? (Distancia / Tiempo / Velocidad / Aceleración) ";
  }
  else if (lang=="gal") {
    return "Cal é o valor que descoñeces? (Distancia / Tempo / Velocidade / Aceleración) ";
  }
}

exports.lang_motion = function(){
  if (lang=="eng") {
    return "motion"
  }
  else if (lang=="esp") {
    return "movimiento"
  }
  else if (lang=="gal") {
    return "movemento"
  }
}

exports.lang_distance = function(){
  if (lang=="eng") {
    return "distance"
  }
  else if (lang=="esp") {
    return "distancia"
  }
  else if (lang=="gal") {
    return "distancia"
  }
}

exports.lang_whatisyourtime = function(){
  if (lang=="eng") {
    return "What is your time in seconds? "
  }
  else if (lang=="esp") {
    return "Cuánto es el tiempo en segundos? "
  }
  else if (lang=="gal") {
    return "Cánto é o tempo en segundos? "
  }
}

exports.lang_whatisyourvelocity = function(){
  if (lang=="eng") {
    return "What is your velocity in m/s? ";
  }
  else if (lang=="esp") {
    return "Cuál es la velocidad en m/s? ";
  }
  else if (lang=="gal") {
    return "Cal é a velocidade en m/s? ";
  }
}

exports.lang_isthereacceleration = function(){
  if (lang=="eng") {
    return "Is there any acceleration ? (Yes / No) ";
  }
  else if (lang=="esp") {
    return "Hay aceleración? (Si / No) ";
  }
  else if (lang=="gal") {
    return "Hai aceleración? (Si / Non) ";
  }
}

exports.lang_whatisyouracceleration = function(){
  if (lang=="eng") {
    return "What is your acceleration in m/s2? ";
  }
  else if (lang=="esp") {
    return "Cuál es la aceleración en m/s2? ";
  }
  else if (lang=="gal") {
    return "Cal é a aceleración en m/s2? ";
  }
}

exports.lang_notrecognized = function(){
  if (lang=="eng") {
    return "Not recognized. Please try again";
  }
  else if (lang=="esp") {
    return "Entrada desconocida. Por favor, reintentar";
  }
  else if (lang=="gal") {
    return "Non se recoñece. Por favor, volva a intentar";
  }
}

exports.lang_yes = function(){
  if (lang=="eng") {
    return "yes";
  }
  else if (lang=="esp") {
    return "si";
  }
  else if (lang=="gal") {
    return "si";
  }
}

exports.lang_y = function(){
  if (lang=="eng") {
    return "y";
  }
  else if (lang=="esp") {
    return "s";
  }
  else if (lang=="gal") {
    return "s";
  }
}

exports.lang_no = function(){
  if (lang=="eng") {
    return "no";
  }
  else if (lang=="esp") {
    return "no";
  }
  else if (lang=="gal") {
    return "non";
  }
}

exports.lang_n = function(){
  return "n";
}


//github 8ctorres
