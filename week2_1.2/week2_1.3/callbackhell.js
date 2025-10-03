
// making a black box
// 
 //where is the error in code 
 // how to make it better 
function setTimeoutPromise(delay) {
    return new Promise(function(resolve){
        setTimeout(resolve, delay);
    }
    );
}
// converted a  simpel etitmout int promisified one 
function callback(){
    console.log( "5 secomnf has passed ");
    
}

// make a clla back hell 

setTimeout(function () {
    console.log("hi");
    setTimeout(function() {
        console.log("hello");
        setTimeout(function(){
            console.log("hello again");
        }, 5000);
    }, 3000);
}, 4000);




// promisidfied vcersion of callbackhell 

setTimeoutPromise(1000).then(function(){
    // started from here 
    console.log("hi");
    return setTimeoutPromise(3000).then(function(){
        // 1nested syntax

        console.log("hello");

        // 2nd nested synatx
        setTimeoutPromise(5000).then(function(){
            console.log("hello again")
        }
        )
        
    })
    
})