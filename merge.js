function merge(arrA, arrB) {
  let pointerA = 0;
  let pointerB = 0;
  let newArr = [];

  while((pointerA < arrA.length) && (pointerB < arrB.length)){
    if (arrA[pointerA] <= arrB[pointerB]){
      newArr.push(arrA[pointerA]);
      pointerA++;
    } else {
      newArr.push(arrB[pointerB]);
      pointerB++;
    }
  }

  if (pointerA < arrA.length){
    newArr = newArr.concat(arrA.slice(pointerA));
  }

  if (pointerB < arrB.length){
    newArr = newArr.concat(arrB.slice(pointerB));
  }

  return newArr;

}

function mergeSort(arr) {
  if (arr.length < 2){
    return arr;
  }
  let midpoint = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, midpoint))
  let right = mergeSort(arr.slice(midpoint));
  return merge(left, right);
}

module.exports = { merge, mergeSort};