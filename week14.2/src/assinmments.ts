

interface User {
    name : string ;
    age : number ;
    address? : {
        city : string ;
        state : string ;
    }
}

// yes that interface can be uised for obhjects , and i can iterate over the properties of the object as well
// iterating through obhject us same as an array ?
// no we cannot iterate through an object like an array but we can use for in loop to iterate through the properties of the object

function filterUser(user : User[]){

    let ans = [];  // empty arrya 

    for (let i  = 0 ; i < user.length ; i++){
       if(user[i].age >18){
        ans.push(user[i]) // push the user object in the ans arrya if age is greater than 18
       }
    }
    return ans;
}

const fltsusr = filterUser([
    {
        name : "abhisek" ,age : 21 ,
        address : {
            city : "delhi" , state : "delhi"        
        }
    },
    {   
        name : "raman" , age : 57 ,
        address : {
            city : "delhi" , state : "delhi"    
        }
    }
]); 


console.log(fltsusr)