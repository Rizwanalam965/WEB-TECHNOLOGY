// ------------------!Object---------------

// it is a spacial way to storing the data in the form of key and pair


var aviral=["avira",20,"js","true","true",4]
console.log(aviral);
console.log(typeof aviral);//object

// !============ Creation  ==============
var obj={
    sname:"parsa",
    age:22,
    skills:[ "python","sql","React","mangodb","nodejs","express js"],
    course: "JFS",
    isplaced:"true",
    rating:0,
    47:"rider",
};
console.log(obj);



// !---------------------------- Retrieving -------------------
// ?1 Dot notation---->objectname.keyname -------->it will return value

//  Print name
console.log(obj.sname);

//  Print age
console.log(obj.age);
//  Print skill
console.log(obj.skill);
console.log(obj.course);
console.log(obj.isplaced);
// console.log(obj.47);     //we canot acces number key  by using dot notation.

// console.log(obj[course]);  //object.js:37 Uncaught ReferenceError: course is not defined



// ?Bracket notation---->objectname["keyname"] -------->it will return value
console.log(obj["sname"]);
console.log(obj["age"]);
console.log(obj["skill"]);
console.log(obj["course"]);
console.log(obj["45"]);
console.log(obj[45]);


var rating="age";
console.log(obj[rating]);




// if we pass without string compiler will think it is a variable
//  ======== Creating Key============
//  ! Syntax : objectName.key=value;
//  ! Syntax : objectName[key]-value;
obj. address  ="Delhi";
obj.girlfriends="urfi";
obj.exgirlfriends -"rakhisawant";
obj["boyfriends"]="rishi";
console.log(obj);




// ======= ---------------- Updating  ---------------------======
// objName.existingKey=new value;
// objName["existingKey"]=new value;
obj.sname="parsa singh";
obj.age-25;
obj["course"]="MERN STACK";
obj["skills"]="MANGODB","EXPRESS","REACT JS","NODE JS";
console.log(obj);




// !---------------------======    Deletion    ========----------------------
delete obj.girlfriends;
delete obj["boyfriends"];
delete obj["isplaced"];
// delete obj.47; //!error
delete obj["47"];
console.log(obj);





// !-------------------    Object Method    ------------------------------
var obj={
    sname:"vikas",
    age:20,
    course:"java Script",
};
console.log(obj);  //the result will printed in sorted alphabet order .



// !-------------------    keys    ------------------------------
// It will return all the keys  present in a object.
// ? Object.keys(objName)
console.log("key-",Object.keys(obj));




// !-------------------    Values    ------------------------------
// It will return all the values present in an object.
// ? Object.values(objName)
console.log(Object.values(obj));




// !-------------------    entries    ------------------------------
// It will return all the keys and  values present in an object.
// ? Object.entries(objName)
console.log(Object.entries(obj));




// !-------------------    hasOwnProperty    ------------------------------
// It will check the properties  is present or not
// it will return the boolean output
// ?~ objName.hasOwnProperty("keyname");
console.log(obj.hasOwnProperty("age"));//true
console.log(obj.hasOwnProperty("skills")); //false




// !================= concat---- assign  ======
// ?It will merge 2 or more Object togather 
// Object.assign(obj1, obj2, obj3)
//All the object  will store in the first parameter

//  case 1

var obj1 ={
    sname:"Rishi",
    age:20,
};

var obj2={
    course:"React js",
    skills:["html","css","js","sql","java"],
};

var obj3={
    streetNo:423,
    landmark:"confidential",
    state:"delhi",
    pincode:110008,
};

console.log("Obj1 -",obj1);
console.log("Obj1 -",obj2);
console.log("Obj1 -",obj3);

var mergeobj= Object.assign({},obj1,obj2,obj3); //To prevent the change in obj1 we are using empty{},
console.log(mergeobj);


console.log("Obj1 -",obj1);
console.log(obj2);
console.log(obj3);


// Case 2----

var newObj = Object.assign(
    {},{name:"aviral",age:20},
    {course:"js"},
    {address:"delhi"}
) ;

console.log(newObj);


// ?case 3----

// var object1 ={
//     sname:"Rishi",
//     age:20,
// );

// var object2={
//     course:"React js",
//     skills:["html","css","js","sql","java"],
// };

// var obj3={
//     streetNo:423,
//     landmark:"confidential",
//     state:"delhi",
//     pincode:110008,
// );

// var mergeobj= Object.assign({},object3,object2,object1); 
// console.log(mergeobj);

// ? IT will give the error..........





//! =======     dive more into Objects     =================
// we can create an abject in 3 ways
// 1.object literals,  2.new keyword  3.constructor

// 1. ------------Object Literals  ----------------
var obj={
    sname:"sunny",
    age:20,
    course:"js"
};
console.log(obj);




// 2. ------------new keywords  ----------------
var ar =new Array(10,20,30);
console.log(ar);  //[10,20,30]


// var ar - new Array(10,20,30);
// console.log(ar);    //give error

ar[0]=10;
ar[1]=20;
ar[2]=30;
console.log(ar); //by adding new elements----->[10,20,30]


// ?  case 1

var obj =new Object({sname:"sunny",age:20,course:"js"});
console.log(obj);


// ?  case 2

var obj =new Object();
console.log(obj);

obj.sname - "sunny";
obj.age= 20;
obj.course ="js";
console.log(obj); // BY adding properties ---->{sname:"sunny",age:20,course:"js"}

 

// ====================      Constructor      ====================

class Student{
constructor(para1,para2,para3){
    console.log(para1);
    console.log(para2);
    console.log(para3);
    console.log(this);

    this.name =para1;
    this.age =para2;
    console.log(this);
    this.course=para3;
    console.log(this);
    this.address="delhi";
    console.log(this);
    
    
}
}

let parsa =new Student("parsa",20);

let risi =new Student("rishi",22,"jfs");

let avirals = new Student("avirals",23,"MERN");


let nadir =new Student("Nadir",22,"jfs");


//==========================================

console.log("start");
class Employee{
    constructor(name,age,designation){
        this.name=name;
        this.age=age;
        this.designation=designation;
    }
}

console.log(Employee);
let emp1 =new Employee("userOne",20,"frontedDEV");
console.log(emp1);


let emp2 =new Employee("user2",25,"Backend");
console.log(emp2);

console.log("end");


