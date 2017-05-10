var exports = module.exports = {};

function PasswordMessage(m){
this.name = "Password Message";
this.message = m;
}

function inRange(char,min,max){

    let unicode = char.charCodeAt(0);
    if(unicode<=min){
      return false;
    }
    else if(unicode>=max){
      return false;
    }
    else{
      return true
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}

exports.containsUpper =function(str){
let hasUpper = false;

try{
  for (let i = 0; i < str.length; i++){
    if(inRange(str[i],65,90)){
      hasUpper = true;
      throw new PasswordMessage("Your password has uppercase");
    }
  }

  if(hasUpper==false){
    throw new PasswordMessage("Your password does not have uppercase");
  }
 }

 catch(e){
   console.log(e.name+": "+e.message);
   return hasUpper;
 }

}


exports.containsLower =function(str){
  let hasLower = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],97,122)==true){
        hasLower = true;
        throw new PasswordMessage("Your password has lowercase");
      }
    }

    if(hasLower==false){
      throw new PasswordMessage("Your password does not have lowercase");
    }
   }

   catch(e){
     console.log(e.name+": "+e.message);
     return hasLower;
   }

}


exports.containsNumerical =function(str){
  let hasNumerical = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],48,57)==true){
        hasNumerical = true;
        throw new PasswordMessage("Your password has at least a number");
      }
    }

    if(hasNumerical==false){
      throw new PasswordMessage("Your password does not have any numbers");
    }
   }

   catch(e){
     console.log(e.name+": "+e.message);
     return hasNumerical;
   }

}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  let special = [33,64,35,36,37,94,38,42];
  try{
    for (let i = 0; i < str.length; i++){
      for (let j = 0; j < special.length; j++) {
        if( str[i].charCodeAt(0) == special[j]){
          hasSpecial = true;
          throw new PasswordMessage("Has a special character");
        }
      }
    }

    if(hasSpecial==false){
      throw new PasswordMessage("Does not have any special characters");
    }
   }

   catch(e){
     console.log(e.name+": "+e.message);
     return hasSpecial;
   }

}
