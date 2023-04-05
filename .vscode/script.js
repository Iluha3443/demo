
function makeArray(firstArray, secondArray, maxLength) {
    
for ( let i = 0; i < maxLength; i +=1) {
let words = firstArray.concat(secondArray);
  if (words>maxLength){
  let  total = words = maxLength;
    return total;
  }
  return words;
}


   
  }
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea']))