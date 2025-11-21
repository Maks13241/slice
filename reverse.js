function Yulia(arr){
    
    const half = arr.length / 2;
    const division = arr.slice (0, half);
    const oleh = arr.slice (half);
   return [...oleh, ...division]


}

console.log(Yulia ([1,2,3,4,5,6])) 
