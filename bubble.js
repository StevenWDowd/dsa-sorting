function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--){
    let hasSwapped = false;
    for(let j = 0; j < i; j++){
      if (arr[j] > arr[j + 1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        hasSwapped = true;
      }
    }

  if (!hasSwapped){
    return arr;
  }
  }
  return arr;
}

module.exports = bubbleSort;