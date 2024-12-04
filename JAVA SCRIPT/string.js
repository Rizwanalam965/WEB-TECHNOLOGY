// ==================   string 
// string  is a collection of character which is inclose single quotes or double quotes and back ticks.
var s = 'i love javaScript';
console.log(s);
console.log(typeof s);



var s = "i love javaScript";
console.log(s);
console.log(typeof s);


var s = `i love javaScript`; //left side of 1 top of the tab
console.log(s);
console.log(typeof s);


// String interpolation
// it  ia a process of accessing the variable into a string.
// it is only possible with back ticks
//  syntax: `...........${variablename}.......`;

var sname = "Rizwan";
var sal = 200000;
var greet ="Dear"+ sname +"you got selected salary of "+sal+"per month";
console.log(greet);


var greet =`Dear${sname}, you got selected salary of ${sal} per month`;
console.log(greet);


// length property
// length is not a method we should not invoke it.

var s="javaScript";
console.log(s);
// console.log(s.length()); // s.length is not function
console.log(s.length);



// ===============String method==========


// 1. toLowerCase();
// 2. toUpperCase();
// 3.toString();
// trimStart();
// trimEnd();
// trim();
// replace();


// toupperCase()
// it convert all the alphabetic character in a string uppercase

var s="i love javaScript";

console.log(s);
console.log(s.toUpperCase());


// toupperCase()
// it convert all the alphabetic character in a string Lowercase.

var s="i love javaScript";

console.log(s);
console.log(s.toLowerCase());



// toString():
// it will convert datatype into string

var n=10;
console.log(n); //10
console.log(typeof n); //number

var s= n.toString();
console.log(s);       //10
console.log(typeof s); //String


// ? trimstart();
// it will remove the unwanted  space at initial position.

var s="            JavaScript            ";
console.log(s);
console.log(s.length);

console.log(s.trimStart());
console.log(s.trimStart().length);




// ? trimEnd();
// it will remove the unwanted  space at ending position.


var s="       JavaScript          ";
console.log(s);
console.log(s.length);
console.log(s.trimEnd());
console.log(s.trimEnd().length)



// ? trim();
// it will remove the unwanted  space at initial position and  ending position.

var s="       JavaScript          ";
console.log(s);
console.log(s.length);
console.log(s.trim());
console.log(s.trim().length)



//  replace
// it will replace the existing character with new character
// it will raplace only  for first matching character


var s ="something  is happend because of something is happend in pastSo dont do that something this somethig  will not happend again";
console.log(s);
console.log(s.replace("something","nothing"));
var s="abcabcabc";
console.log(s.replace("a","z"));
console.log(s.replace("abc","a"));
console.log(s.replace("abcabc","z"));






// ? substr();
// it will extract subpart of an string 
// Syntax: variableName.substr(starting index,length)
//  it will be start index is zero.
// starting index is included

var s ="I love javaScript";
console.log(s);
console.log(s.substr(2,4));   //love
console.log(s.substr(7,10));  //javaScript
console.log(s.substr(11,6));  //Script
console.log(s.substr(7,4).toUpperCase())//JAVA



// ? substring();
// it is a alternative of substr
// both will perform same
// Syntax:  variableName.substring(SI,EI)   SI=startingindex,EI=endindex
// EI is not includeing



var s="I Love JavaScript";

console.log(s.substring(0,2));
console.log(s.substring(2,6));
console.log(s.substring(7,17));
// print the SCRIPT uppercase
console.log(s.substring(11,17).toUpperCase());



//  ? slice();
// it is an alternative of substr and substring
// All three perform same task
// Syntax: variablename.slice(SI,EI)
// inding index is not including

var s="I Love JavaScript";
console.log(s.slice(7,11))
console.log(s.slice(0,2))
console.log(s.slice(7,17).toLowerCase());
console.log(s.slice(7,17).toUpperCase());










// ? split();
// it will split the string into  an array
// based on parameter

var s= "I love javaScript";
console.log(s.split());
console.log(s.split(""));
console.log(s.split(" "));
console.log(s.split("a"));


var s= "I$l_o_ve$java_Script";
console.log(s);
console.log(s.split());
console.log(s.split(""));
console.log(s.split("$"));
console.log(s.split("-"));
console.log(s.split("_"));






// ======= concate()
//  it will merge 2 or more string togather
// syntax: variableName.concat(variablename2,variablename3,...)
var s1="tata";
var s2="consultency";
var s3="Services";
console.log(s1+""+s2+""+s3);
var mergedArray = s1.concat(space,s2,space,s3);
console.log(mergedArray);

var mergedArray = s1.concat("",s2,"",s3);
console.log(mergedArray);









// ============= index of ()==============
// it will return the index position of a character
// syntax: variablename.indexof("character");
// if the character is not present it will return -1.

var s="javaScript";
console.log(s);
console.log(s.indexOf("a"));//1
console.log(s.indexOf("s"));//-1
console.log(s.indexOf("S"));//4


//  lastIndexOf()

var s="javaScript";
console.log(s);
console.log(s.lastIndexOf("a"));//1
console.log(s.lastIndexOf("s"));//-1
console.log(s.lastIndexOf("S"));//4


var s="hii hii hoi hoi";
console.log(s);
console.log(s.indexOf("i"));
console.log(s.lastIndexOf("hii"));//2


// ===============  includes()  ========
// it will check the character is present or not
// it will return a boolean 
// Syntax: variableNmae.includes("character");

var s="Aviral Singh";
console.log(s.includes("$"));//false
console.log(s.includes("a"));//true
console.log(s.includes("singh"));//false
console.log(s.includes("Singh"));//true

//  ====== charAt()   =======
// it will return the character present at index position
// Syntax::variablename.charAt(indexPosition);

var s="Hello utkarsh";
console.log(s.charAt(0));//H
console.log(s.charAt(4));//o


//++++++=============   charCodeAt()   ==========
// it will return ASCII value of character present at index POsition.
// Syntax :variablename.charCodeAt(indexPosition);

var s="Aviral Singh";
console.log(s);
console.log(s.charCodeAt(0));//65
console.log(s.charCodeAt(4));//97


//++++++=============   String.fromcharCode()   ==========
// it will convert the ascii value into character
// Syntax:String.fromcharCode(Ascii NUmber);


var s="Aviral Singh";
console.log(s);
console.log(String.fromcharCode(65));//A
console.log(String.fromcharCode(97));//a
console.log(String.fromcharCode(100));//4
console.log(String.fromcharCode(50));//2




















