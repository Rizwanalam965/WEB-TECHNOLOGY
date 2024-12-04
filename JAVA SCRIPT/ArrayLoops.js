//   ------LOOp ---------
// 1  for loop
// 2. while loop

var ar=["Aviral","shivam","sunny", "keshv", "megha","ishani"];
console.log(ar);


// for(let i=0;i<ar.length;i++){
//     console.log(i,ar[i]);
    
// }



//  =============   for in   =========
// it  will iterate through a collection
// it will return all the indexes
// Syntax:
// for( let variableName in collection)

console.log("it will itrate on index");

for(let i in ar){
    console.log(i);
    
}






//  =============   for of   =========
// it  will iterate through a collection
// it will return all the values.
// Syntax:
// for( let variableName of collection)


for(let i of ar){
    console.log(i); //It will return array value
    
}




//  =============   for Each()   =========
// it is a method
// it  will iterate on both index and values 
// Syntax:
// collectionName.forEach(callbackfunction) ;

// the callback should contain 2 parameter
// It will  store indexes and other will store values.
// first parameter store value,second parameter store index

ar.forEach((val, ind) => {
    console.log(val);
    console.log(ind);
    
    
});


//  ==============example 2  ---------------
var arr=[10,20,30,40,50];
console.log(ar);

for(let i of arr);{
console.log(i);

}
