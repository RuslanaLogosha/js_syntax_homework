const getItemsString = function(array) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    
    let number;
    number = i + 1;
    result += number + ' ' + '-' + ' ' + array[i] + '\n';
  }
  return result;
  
  };
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));