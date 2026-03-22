


type Users = Record<string , {age : number ,name : string, email : string}>
// what record  does is that it creates a new type where the keys are of type string and the values are objects with age and email properties


// recodrd defines type for keys and values of an object

const users: Users ={

    "abhishek" : {
        age : 21 , name : "abhishek" , email : "dsfj"
    },
    "john" : {
        age : 30 , name : "john" , email : "dsfj"   
    }
}


///// !!!!!!!!we can alos feine users as type 

// jsut like in cpp
const usersss = new Map ();
// mapis  js concpet 

// implememnt a map in ts 
usersss.set("abhishek" , {age : 21 , name : "abhishek" , email : "dsfj"});
usersss.set("john" , {age : 30 , name : "john" , email : "dsfj"});

usersss.get("abhishek");
console.log(usersss.get("abhishek"));

// here abhishek is the key and the value is an object with age , name and email properties
