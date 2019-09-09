const selectionSort = (array) => {
  const length = array.length;

  for(let i = 0; i<length; i++) {
      let min = i;
      let temp = array[i];

      for(let j = i+1; j<length; j++) {
          if(array[j] < array[min]) {
              min = j;
          }
      }
      array[i] = array[min];
      array[min] = temp;
  }

  return array;
};

console.log(selectionSort([1, 5, 2, 3, 8, 4]));

