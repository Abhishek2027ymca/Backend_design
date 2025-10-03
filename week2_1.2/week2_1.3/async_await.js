

// promisified in a synchronous way 

// async function f()
// {

// }

// not that important
//!!!!!!!!!!!!!! async awaiit is a promisified version with clear syntax !!!!!!!!!!!! 
function setTimeoutPromise(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

async function solve() {
    await setTimeoutPromise(1000);
    console.log("hi");

    await setTimeoutPromise(2200);
    console.log("hello");

    await setTimeoutPromise(5000);
    console.log("hi there ");
}


// call the solve function 
// ek ek kar ek  setimeout call karega 
solve();


console.log(" after solve function  , it will be prionted first as it is syncronous code ");
