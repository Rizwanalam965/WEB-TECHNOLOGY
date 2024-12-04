// ! BROWSER OBJECT MODEL
// THE BROWSER  OBJECT MODEL  ALLOW US TO  COMMUNICATE THE BROWSER.
// BROWSER IS  ALWAYS INDICATED BY THE KEYWORD WINDOW.
// IN THIS WINDOW WE WILL HAVE MANY OBJECT MODEL LIKE
// 1.document
// 2.screen
// 3.history
// 4.navigator
// 5.location

console.log("i am browser object model file");
console.log(window);

// =======windows properties =======
// 1.document
// 2.screen
// 3.history
// 4.navigator
// 5.location
// 6.inner height
// 7.outerHeight
// 8.innerWidth
//  9.outerWidth

console.log(window.document);//it will return the document (html code)
console.log(window.screen);//it will provided the info about screen
console.log(window.history);//t will provided the info about history(no of webpages)
console.log(window.navigator);//it will provided the info about browser
console.log(window.location);//it will provided the info about current loc
console.log(window.innerHeight);//document height excluding console area
console.log(window.outerHeight);//document height including console area
console.log(window.innerWidth);//document width excluding console area
console.log(window.outerWidth);//document width including console area



// !===================== window method  =================

//prompt();
//it will take the input from the user
// let input = window.prompt("enter you name");
// console.log("welcome",input);



// ~alert():
//it will display the pop up massage with a button ok.
// window.alert(" alert-----yor have logged successfully");


//~confirm():
// It will display the pop ip massage with two button ok and cancel
// window.confirm(" conform-----yor have logged successfully");


// ~open():
// it will open a new webpage with provided path.
// window.open("https://www.youtube.com/");
// window.open("https://www.google.com/");
// window.open("https://www.google.com/");


// ~close():
// it will close the current webpage with provided path
// window.close("https://www.youtube.com/");



//~ setTimeout(callback,time);
// it will invoke the callback function after the completion of time.
// for example 3s ---->the call back invoke automatically  after 3s.
//whenever we wants to keep a timer then we have to use this method.
//it will execute only once after the completion of time.
// console.log("I am the first massage ");


// setTimeout(()=>{
//     console.log("I am the Second massage ,i will print after 3 sec");
// },1000);


// setTimeout(()=>{
//     console.log("I am the third message , I will show my massage after 6 sec");
// },6000);


// setTimeout(()=>{
//     console.log("I am the 4th massage");
// });




//!setInterval(callback, intervaltime);
//it will execute the function for every interval time

// setInterval(()=>{
//     console.log("I am  a massage");
// },1000);

// clearTimeout(());
// it will  stop the working of setTimeout()

// let a=setInterval(()=>{
//     console.log("I am  a massage will print 5sec");
// },5000);

// clearTimeout((a)); //to stop the working of setTimeout().



// clearInternal():
// it will stop the working of setInterval()


// let b =setInterval(()=>{
//     console.log("I am the Interval massage");
// },3000);

// clearInterval(b);


// setTimeout(()=>{
//     clearInterval(b);
// },3000);


// !===========================   DOM   ===================================
// it will allows us to manipulate the document




// !===========================   Screen   ===================================
// ?it will provide the basic info  about the screen
console.log(window);
console.log(window.screen);
console.log(screen);

console.log("height",window.screen.height);//This is the total height of System screen
console.log("height",screen.height);//This is the total height of System screen

console.log("avaiheight",window.screen.availHeight);//This is the total height of System screen
console.log("avaiHeight",screen.availHeight);//This is the total height of System screen


console.log(screen.width);
console.log(screen.availWidth);
console.log(screen.orientation);//It will provide details of landscape and potrate
console.log(screen.orientation.type);




// !===========================   History   ===================================
// it will keep a track on how many wabpages open in a tab
// properties ----> length

// method

// forward(); ,back() ,go(+-number)





// !===========================   NAVIGATOR   ===================================
// it will provide the information about the browser
console.log(window);
console.log(window.navigator);
console.log(window.navigator.appCodeName); // mozilla
console.log(window.navigator.appName); //Netscape
console.log(window.navigator.appVersion); //5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36
console.log(window.navigator.platform); //win32
console.log(window.navigator.online); //undefined
console.log(window.navigator.pdfViewerEnabled); //true
console.log(window.navigator.userAgent); //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36




// !===========================   Location   ===================================
// it will provide the information about the current location
console.log(window);
console.log(window.location);
console.log(location.host);  //127.0.0.1:5500
console.log(location.hostname); //127.0.0.1
console.log(location.port); //5500
console.log(location.protocol);//http
console.log(location.href);   //http://127.0.0.1:5500/JAVA%20SCRIPT/index2.html
console.log(location.origin); //http://127.0.0.1:5500
console.log(location.pathname); ///JAVA%20SCRIPT/index2.html


//methods
// 1.assign():
// it will assign new address to the current page


// window.location.assign("https://www.youtube.com/");


//~ reload():
// it will reload the page
// window.location.reload(); 


// replace():
// it will replace the current path address with new address
// it will similar to the assign()method

window.location.replace("https://www.youtube.com/")




















// !================History ==================================

// !================Navigator  ==================================

// !================Location ==================================