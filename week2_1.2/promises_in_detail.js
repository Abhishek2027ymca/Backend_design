
// // promise constructor
// // promise class gives you a promise that i will provide yous omeyhinf in future 

// function logname(){
//     console.log("harkirat");

// }
// /// logname executrd in swttimeout 

// //////jab  5 sec ho jaaye to callback the  loh=ganme function
// setTimeout(logname, 5000); // after 3 seconds it will call the function 

// // promioses  are just a cleaner way to write callbacks
// // used  to handel asynchronous oprations more efficiently


function setTimeoutPromisified(ms) {
    //// creating a  object of promisw class
    return new Promise(resolve => setTimeout(resolve, ms))


    // // returning the varible of  promise clas 

}

// some callback fnc
function callbackk() {
    console.log("5 seconf baad chalunga");
}


setTimeoutPromisified(5000).then(callbackk);
