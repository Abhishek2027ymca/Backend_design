
//  we sue partila to have an otppion so that whcih one  propes of an interface to be adde in the next intercfxce 
// we have a user interface with name , age , email and password

interface user {
    name : string ;
    age : number ;
    email : string;
    password : string ;
}


type UpdatePropss = Pick<user, 'name' | 'age' | 'email'>;
// all thre are neceary filed in updateprops 

type updatePropsOption = Partial<UpdatePropss>;
// we can implement update props partially 

 function updateUser( updatedProps : updatePropsOption )  {

// hit the db to update the user 

}   

updateUser({email : "1233" })
// no compalint o= from type script 
