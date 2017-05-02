var exports = module.exports = {};

function PasswordMessage(m){
this.name = "Password Message"
this.message = m
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode<min){
      return false;
    }
    else if(unicode[i]>max){
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
    if(inRange(str[i],65,90)==true){
      hasUpper = true;
      throw new PasswordMessage("Has uppercase");
    }
  }

  if(hasUpper==false){
    throw new PasswordMessage("Does not have uppercase");
  }
 }

 catch(e){
   console.log(e.message);
   return hasUpper;
 }

}


exports.containsLower =function(str){
  let hasLower = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],97,122)==true){
        hasUpper = true;
        throw new PasswordMessage("Has lowercase");
      }
    }

    if(hasUpper==false){
      throw new PasswordMessage("Does not have lowercase");
    }
   }

   catch(e){
     console.log(e.message);
     return hasLower;
   }

}


exports.containsNumerical =function(str){
  let hasNumerical = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],48,57)==true){
        hasUpper = true;
        throw new PasswordMessage("Has a number");
      }
    }

    if(hasUpper==false){
      throw new PasswordMessage("Does not have any numbers");
    }
   }

   catch(e){
     console.log(e.message);
     return hasNumerical;
   }

}


exports.containsSpecial =function(str){
  let hasSpecial = false;
  let special = [33,64,35,36,37,94,38,42];
  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],special[i],special[i])==true){
        hasUpper = true;
        throw new PasswordMessage("Has a special character");
      }
    }

    if(hasUpper==false){
      throw new PasswordMessage("Does not have any special characters");
    }
   }

   catch(e){
     console.log(e.message);
     return hasSpecial;
   }

}
