const getData = function(keys, arrayOfDataArrays) {
    let array = [];
    for (let i = 0; i < arrayOfDataArrays.length; i++) {
      let obj = {};
      for (let j = 0; j < keys.length; j++) {
        if (arrayOfDataArrays[i][j]){
        obj[keys[j]] = arrayOfDataArrays[i][j];
        }
      }
      array.push(obj);
    }
    return array;
  }