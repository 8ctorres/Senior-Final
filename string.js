var exports = module.exports = {};

function PasswordMessage(m){
this.name = "Password Message";
this.message = m;
}

function inRange(char,min,max){
  console.log("running function inRange with char= "+char+" , min= "+min+" , and max= "+max)

    let unicode = char.charCodeAt(0);
    if(unicode<=min){
      console.log("f inrange returns FALSE")
      return false;
    }
    else if(unicode>=max){
      console.log("f inrange returns FALSE")
      return false;
    }
    else{
      console.log("f inrange returns TRUE")
      return true
    }
}

exports.checkLength = function(str){
  console.log("Checking length of... "+str)
    let valid = (str.length >= 8 && str.length <= 20);
    console.log("checklengt.valid="+valid)
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
        console.log("return valid of f checkLength="+valid)
        return valid;
    }
}

exports.containsUpper =function(str){
  console.log("Checking Upper of... "+str)
let hasUpper = false;

try{
  for (let i = 0; i < str.length; i++){
    if(inRange(str[i],65,90)){
      hasUpper = true;
      throw new PasswordMessage("Has uppercase");
    }
  }

  if(hasUpper==false){
    throw new PasswordMessage("Does not have uppercase");
  }
 }

 catch(e){
   console.log(e.name+": "+e.message);
   console.log("hasUpper="+hasUpper)
   return hasUpper;
 }

}


exports.containsLower =function(str){
  console.log("Checking lower of... "+str)
  let hasLower = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],97,122)==true){
        hasLower = true;
        throw new PasswordMessage("Has lowercase");
      }
    }

    if(hasLower==false){
      throw new PasswordMessage("Does not have lowercase");
    }
   }

   catch(e){
     console.log(e.name+": "+e.message);
     console.log("hasLower ="+hasLower)
     return hasLower;
   }

}


exports.containsNumerical =function(str){
  console.log("Checking numerical of... "+str)
  let hasNumerical = false;

  try{
    for (let i = 0; i < str.length; i++){
      if(inRange(str[i],48,57)==true){
        hasNumerical = true;
        throw new PasswordMessage("Has a number");
      }
    }

    if(hasNumerical==false){
      throw new PasswordMessage("Does not have any numbers");
    }
   }

   catch(e){
     console.log(e.name+": "+e.message);
     console.log("hasNumerical="+hasNumerical)
     return hasNumerical;
   }

}


exports.containsSpecial =function(str){
  console.log("Checking special of... "+str)
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
     console.log("hasSpecial="+hasSpecial)
     return hasSpecial;
   }

}
