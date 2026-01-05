

function random(resolve) {
    setTimeout(resolve, 3000);
}
// p is an isntance of a promise clas s
let p = new Promise(random);   // supposes to return you somehting  

function callback() {
    console.log(" promised suced ");
}
p.then(callback);






// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let myPromise = new Promise(function (resolve, reject) {
//     // apna async task karo
//     setTimeout(() => { console.log('timeout executed') }, 4000)
//     // maan lo itna hi async task tha toh ab resolve kar do
//     resolve("promise executed")
// })

// // then ko Promise ke oopar use karte hai
// myPromise.then((resolvedValueJoAayi) => { console.log(resolvedValueJoAayi) })


// how to use then with promise
let myPromise2 = new Promise(function (resolve, reject) {
    // apna async task karo
    setTimeout(() => { console.log('timeout2 executed') }, 4000)
    // maan lo itna hi async task tha toh ab resolve kar do
    resolve("promise2 executed") // it is like clog
    //  why it is not printwd 
    // because it is not called anywhere
    // pritnit 

})

myPromise2.then((resolvedValueJoAayi) => { console.log(resolvedValueJoAayi) })
/// waht will be the output

let promise = new Promise(function (resolve, reject) {

     let success = false ;
     if(success){
         resolve("operation was succesfull")
     }
     // ye apne aap execute ho jayega  when we runt he code

    setTimeout(() => { console.log('timeout2 executed') }, 1000)


    //  else {
    //      reject(" operation was failed ")
    //  }

})
// promise is exucuted only by then or catch , cannot by its own 
// it is like a callback function
// promise.then( result => console.log(result) );
// promise.catch( error => console.log(error) );