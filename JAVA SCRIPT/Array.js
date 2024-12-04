// == Array ==========
//  an array is a collection of homogeneous or heterogenous data element

var sname="Harsh";
var age=20;
var course="React jS";
var skill="MERN";
// creating variable is hard
//  storing variable is hard
// updating variable is hard
// deleting  variable is hard


// creation

var harsh = ["Harsh",20,"React js","MERN"];

let arr = ["parsa",20,"mern",["html","css","js"],true,undefined];

console.log(arr);
// print name


// Retreving
console.log(arr[0]);//parsa
console.log(arr[2]);//mern
console.log(arr[3]);//["html","css",js]
console.log(arr[3][1]);// css

// ==== updation  =====


arr[5]=5000;// if the index is present it will update
console.log(arr);

arr[6]=4;// if the index is not present it will create and update
console.log(arr);


//  7,8,9 ----> consider as empty

arr[10] = "Rizwan";
arr[3][3] = "React js";
arr[3][2] = "Node js";
console.log(arr);

// Deleting ====
delete arr[1];
delete arr[10];
delete arr[3][1];
console.log(arr);



// ?================== Array method ================
// Array is  the collection of Homogenous and Heterogenous data element


//  ======= pop() ================
// it will remove the element  at the last index
// !Syntax: ar.pop();

var ar=[10,20,30,40,50,60,70,80]
console.log(ar);
ar.pop();
console.log(ar);


//  ======= push() ================
// It will add the element at last index
//  ! Syntax: ar.push(element)


var ar=[10,20,30,40,50,60,70,80]
console.log(ar);
ar.push(800);
console.log(ar);
ar.push("sunny");
console.log(ar);
ar.push(["html","css","javaScript"]);
console.log(ar);

// ? ==============shift()================
// ?it will remove the element at 0th index.
// !Syntax: ar.shift();

ar.shift()
console.log(ar);

ar.shift()
console.log(ar);




// ? ==============unshift()================
// ?it will add the element at 0th index.
// !Syntax: ar.unshift(element);
ar.unshift(500);
console.log(ar);

ar.unshift("Shivani");
console.log(ar);

ar.unshift(["java","python","sql"]);
console.log(ar);
// document.write(ar);


// ? ============ slice()======
// it will extract the sub part of array
// ! Syntax: ar.slice(SI,EI)
// It will not include EI

console.log(ar.slice(3,4)); //30
console.log(ar.slice(1,2));//shivani
console.log(ar.slice(10,12));//sunnu,[java,python,sql]



//    ?------------ splice()-----------------
//  it will modify the  orignal array
// ! Syntax  ar.splice(SI, no. of element to delete, element to add);

// ? Ex 1
var ar=[10,20,30,40,50,60,70,80];
console.log(ar);

// remove 30,40,50 and add  2,4,dhruv,parsa
ar.splice(2,3,2,4,"dhruv","parsa");
console.log(ar);

// ? Ex 2
var ar=["parsa","shiwani","rishi","keshv","aviral","rahul"];
console.log(ar);

// remove siwani,rishi add asif ravi praval
ar.splice(1,2,"asif","ravi","prable");
console.log(ar);



// ? ex 3
// ?


var ar=[10,20,[100,400,500,600],30,40];
console.log(ar);

// ?remove  400 ,500 add kaniska ,vikas ,megha
// outpot like [10,20,[100,kaniska,vikas,megha,600],30,40]

ar[2].splice(1,2,"kaniska","vikas","megha");
console.log(ar);


// ! ex 4-------

var ar=[10,20,[100,400,[5,10,15,20],600],30,40];
console.log(ar);

// replace the 5 table things with 3 table things(1)
// [5,10,15,20] ------->[3,6,9,12]


ar[2].splice(2,1,[3,6,9,12]);
console.log(ar);
// or
ar[2][2].splice(0,4,3,6,9,12);
console.log(ar);


// ? --------------toString()------------------
// it will convert the date type into String

// !Syntax : VariableName.toString()
//  By defaul  the element will be seperated by using ","


console.log("======toString=======");
var ar=[10,20,30,40,50];
console.log(ar);
console.log(typeof ar);//object

console.log(typeof ar.toString());//String


var ar=["parsa","shiwani","rishi","keshv","aviral","rahul"];
console.log(ar);
console.log(ar.toString());
console.log(ar.toString(" "))//it will work
console.log(ar.toString("$"));//it will work
console.log(ar.toString(typeof toString()));


//  ? ----------------Join()=========
// it will  convert  the  array datatype  int string data type based on parameter

//  !Syntax: ar.join(parameter);
//  By defaul  the element will be seperated by using ",".

console.log("-----Join--------");
var ar=[10,20,30,40,50];
console.log(ar);
console.log(ar.join());//10,20,30,40,50
console.log(ar.join(" "));//10 20 30 40 50
console.log(ar.join("&"));//10&20&30&40&50
console.log(ar.join("&%^"));//10&%^20&%^30&%^40&%^50
console.log(ar.join("A"));//10A20A30A40A50


var ar=["parsa","shiwani","rishi","keshv","aviral","rahul"];
console.log(ar);

// conver into string  by Seperating with  space
console.log(ar.join("              "))


// conver into string  by Seperating with  &
console.log(ar.join("&"));
console.log(typeof ar.join());//String

// conver into string  by Seperating with  ===
console.log(ar.join("==="));

// conver into string  by Seperating with  space --- space
console.log(ar.join(" --- "));


// conver into string  by Seperating with  JavaScript
console.log(ar.join(" JavaScript "));

// conver into string  by Seperating with  Hello
console.log(ar.join(" Hello "));



//  ?=============isArray()===================
// it will help us to identify the datatype is array or not
//  !Syntax : Array.isArray(variableName);
// it will always return boolean as output

var ar=[10,20,30];
console.log(ar);
console.log(typeof ar); //object

var obj = {
    sname :"rishi",
    age : 20,
};
console.log(obj);
console.log(typeof obj);//object
console.log(Array.isArray(ar)); //true
console.log(Array.isArray(obj));//false





// ? -------------indexOf()   ----------------

// it will return the index  position of element
// ! Syntax ar.indexOf(Element)
//  Return  the index of first  occurance of the value in an array ,or -1 if it is not present

var ar=["parsa","shiwani","rishi","keshv","aviral","rahul"];
console.log(ar);
console.log(ar.indexOf("shiwani")); //1
console.log(ar.indexOf("rahul"));//5

//20
console.log(ar[1].indexOf(20));//-1

//30
console.log(ar.indexOf(30));//-1

console.log(ar.indexOf("Rishi"));//-1

console.log(ar.indexOf("rishi"));//2






//?============ includes()=================

// it will check  the element is avalable in array or not
// !Syntax : ar.includes(element);
//  it will return boolean value as a output.
  var ar=["parsa","shiwani","rishi","keshv","aviral","rahul","asif","ravi","prable"];

//   Shiwani
console.log(ar.includes("shiwani"));//true

//   vivek
console.log(ar.includes("vivek"));//false

//   Rahul
console.log(ar.includes("rahul"));//true

//   megha
console.log(ar.includes("megha"));//false


//? ===== reverse()=============

// it will reverse the order
// !Syntax : ar.reverse();

var ar=["parsa","shiwani","rishi","keshv","aviral","rahul","asif","ravi","prable"];
console.log(ar);
console.log(ar.reverse());


var ar=[10,20,30.40,50];
console.log(ar)
console.log(ar.reverse());


//  ?===== concate()======
// it will merge 2 or more  array into one
// !Syntax: first.concat(second,third,...)
var ar1=[10,20,30,];
var ar2=[10,20,30,];
var ar3=[10,20,30,];

var mergedarray=ar1.concat(ar2,ar3);
console.log(mergedarray);



















