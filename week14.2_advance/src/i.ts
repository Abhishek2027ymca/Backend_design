
interface User{


name : string ;
age : number ;
email : string;
password : string ;


};


// a funciton to update the user in databse 
// we can change age , email . password 
interface UpdatedProps {
    name : string ;
    age? : number ;
email? : string;

}

// why this is is not good 
// how to make upfdateprop a subset of  user interfac e
// pullin some [prop form ] user interface


// we use a generics 
// from user intrfc , pick omnlyu name , age , email with their espectivbe props 

type UpdatePropss = Pick<User, 'name' | 'age' | 'email'>;

function updateUser( updatedProps : UpdatePropss )  {

// hit the db to update the user 

}
//puick uiois used here to create a new type that only has the properties we want to update in the database