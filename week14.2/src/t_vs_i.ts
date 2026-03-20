// types vs interfaces


//intersectipoon , a type that has propery of all the difffrent  multuiple types 

type Employee = {
    name : string;
    startDate : string;
    age : number 
}


type Manager = {
    name : string ;
    department : string;    

}




type  teamLead = Employee & Manager; // this is intersection type that has all the properties of employee and manager both
let e: Employee ={
    name : "harkirat",
    startDate : "10-10-2020",  
    age : 30

}


let m : Manager = {
    name : "abhi" ,
    department : "hr"
     
}


let t : teamLead = {
    name : "raman",
    startDate : "10-10-2020",
    department : "hr" ,
    // requr=ire all three fileds of employee and manager both
    age : 33 
}


// incase of union either of the type can be there but not both at the same time


// UNION means either of the type can be there

type EmployeeManager = Employee | Manager; // this is union type that can have either employee or manager type


