
function delay( ms){
     return new Promise(reslove  => setTimeout (reslove))
}
// alwatys  amke a delay function 


async function run() {

    console.log("start");
     await delay(3000);
 
     console.log( " after two seconds ");
     
    
}

run();
// execute the function afterlin declaring it 


// fetch api  with async await 

 
// only function marked asyn can use awaut 
// await pauses execution until  the priomise is resolverd 
// async fnc return a primis 

function addAsync(a, b){
     return new Promise( resolove => {
        setTimeout (( )=> resolove(a+b) , 3000 )
     })
}


 async function call(){
  
    console.log("Adding the number");
     
    // mene ise upar declare kia tha 
     let sum = await addAsync(5,6);

       console.log("result" , sum );
    // error ?'

    // mene is ebhi upar declare kia ths 
    
    await delay(4000);
         console.log(" after 3 secs");
        
 }
 call();