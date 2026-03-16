//  implmenting types in ts helps in providing static type checking and better development experience

interface people {
    name : string ,
     age : number ,
    //  greet : ()=> string ,
}

let  person : people = {
  
name : "Abhishek" ,
age : 21 ,
//// greet : () => {
//     return "hello" + ////person.name

// }
    // here we will get all the properties of people interface and we can also add some more properties to it if we want to
}


// creatingf a class that will implement  the pepple interfae 
// means 

class Manager implements people {
    // ifrst define the primitive
    name : string ;
    age : number ;

    constructor (n: string , a : number ){
        this.name = n ;
        this.age = a ;

    }


}

// letls create amger clas object 

let user = new Manager("abhi" , 21 )

 