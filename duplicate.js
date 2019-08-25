function validateForm(e) {
  if (e.target.value !== "") {
    document.getElementById('duplicates').innerHTML=getDuplicates(userInput.value);
  }
  return true;
}
const existinguserArray= [1001, 2002, 3002, 1000, 3007, 3020];

function getDuplicates(inputValue){
  var userArray= [];
  var dupInput= [];
  inputValue.split(',').forEach((item) => {
    if(item.includes('-')){
      item.split('-')
      for(var i=item.split('-')[0] ; i<item.split('-')[1]; i++){
        userArray.push(i);
      }
    }
    if(userArray.indexOf(parseInt(item))===-1){
      userArray.push(parseInt(item, 10));
    }else{
      dupInput.push(parseInt(item))
    }
  
  });

  const newSet= new Set(userArray);
  let duplicateCount=0;
  let uniqueArray=[...userArray]
  const duplicateElements = existinguserArray.filter((ele) => {
    if(newSet.has(ele)){
      duplicateCount++;
      uniqueArray.splice(uniqueArray.indexOf(ele),1)
      return true
    }
    uniqueArray.push(ele)
    return false
  })
  const uniqueElements = userArray.length + existinguserArray.length - (duplicateCount*2)
  document.getElementById('unique').innerHTML=uniqueElements
  document.getElementById('uniqueElements').innerHTML=uniqueArray
  console.log(duplicateCount)
return duplicateElements.concat(dupInput).join('')
}
