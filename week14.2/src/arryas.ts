



//  function getMax(nums: number[]){
//     let maxvalue: number = -999999;

//     for (let i = 0 ; i<nums.length ; i++){
//       if(nums[i] > maxvalue){
//         maxvalue = nums[i];
//       }
//     }
//     return maxvalue ;

//  }
 // hwere e is the rror 

 interface Address {
    city : string ;
    pincode : number ;
 }

 interface User {
    name : string ;
    age : number ;
    address : Address ;

 }

 let user : User = {
    name: "abhise", 
    age : 21 ,
    address: {
        city: "New York",
        pincode: 10001
    }
 }


 console.log(user.address.city)

 // from a given interface of users, , 
 // i make an arrya with user objects
 
 //make a function whcic filters arrays object ke andar that ages , which are grater than 18 



