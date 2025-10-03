//^^^^^^^^^^^^^^^^^ see thjis e.g to  get clear understanding of promises ^^^^^^^^^^^^
const pizza = new Promise((resolve, reject) => {
  let pizzaReady = true;

  if (pizzaReady) resolve("🍕 Pizza ready!");
  else reject("😢 No pizza today");
});

pizza
  .then(msg => console.log("Friend says:", msg))
  .catch(err => console.log("Friend says:", err));


  //**********************   my e.g *************************** */
/// ***************** use simple function or arror function ********
///** resolve , reject me hume string pass kar sakte hain ya object ya array ya kuch aur */
                               // yha ek function bananya by arror  function  , inside the   object of promise 
  let promise  = new Promise(( reslove , reject) => {
    let succes = true ;
  if (succes){
    reslove(" ye  hein reslove ke andar ki maal ")
  }
  else {
    reject (" ye hein reject ke andar ki mal ")
  }
//Yahaan resolve("Data fetched successfully!") call ho raha hai. 
  })
 
  promise.then( msg =>{ 
    console.log(msg);// yeh wahi message print karega jo resolve me bheja gaya tha
    
  })



  //!!!!!!!!!!!!!!!settimeout promisified function !!!!!!!!!!!

function  wait(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}
