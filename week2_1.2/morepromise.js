

// function random(resolve) {
//     setTimeout(resolve, 3000);
// }
// // p is an isntance of a promise clas s
// let p = new Promise(random);   // supposes to return you somehting  

// function callback() {
//     console.log(" promised suced ");
// }
// p.then(callback);






//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let myPromise = new Promise(function (resolve, reject) {
    // apna async task karo
    setTimeout(() => { console.log('timeout executed') }, 3000)
    // maan lo itna hi async task tha toh ab resolve kar do
    resolve("promise executed")
})

// then ko Promise ke oopar use karte hai
myPromise.then((resolvedValueJoAayi) => { console.log(resolvedValueJoAayi) })



