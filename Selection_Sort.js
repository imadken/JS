function selection_sort(arr){

    let len = arr.length;
    for(let i=0;i<len-1;i++){

        for(let j=i+1;j<len;j++){

           if(arr[i] > arr[j])  [arr[i],arr[j]]=[arr[j],arr[i]];
          
        }

    }
    // return arr
     
}


var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
selection_sort(arr);
console.log(arr);
// console.log(selection_sort(arr));