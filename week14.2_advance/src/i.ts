
interface User{


name : string ;
age : number ;

};

function sumOfage (user1 : User , user2: User){
    return user1.age +user2.age ;

}
sumOfage({name : "Abhishek" , age : 22} , {name : "Anshul" , age : 21}) 
