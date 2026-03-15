


function sum( a: number , b: number ): number {
return a + b
}
// ts compliler helps in type saftey 

sum(44,66)


function gree (name: string) : string{
    return  "hello" + name 
}


let user ={
    name : "abhise",
    age : 21 ,
     address : {    
        city : "delhi",
        state : "delhi"
     }

}

// interface are used to define types of complex objects 

interface User {
    name : string ;
    age : number ;
    address  : {
        // now address key is optional and it can be present or not present in the user object

        city: string ,
        state : string
        
    }
}

// useage here of interface to define the type of user object

let userrr : User = {
    name : "abhise",
    age : 21 ,
     address:  {
        city : "delhi" ,
         state : "fjfhjr"

}

}



function islgal(user : User ): boolean {

    if(user.age >= 10 )
    {
        return true ;
    }
    return false ;
}

let user2 :User= {
    name : "raman",
    age : 22 ,
    address : {
        city : "delhi" ,
        state : "delhi"
    }

}


// an interface and use other interfaces as well 
interface office{
    user : User ;
    company : string ;
}