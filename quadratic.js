var exports = module.exports = {};

exports.equation1 = function(a,b,c){
  let result1 = (0-b+(Math.sqrt(b*b-4*a*c)))/(2*a)
  return result1
}

exports.equation2 = function(a,b,c){
  let result2 = (0-b-(Math.sqrt(b*b-4*a*c)))/(2*a)
  return result2
}
