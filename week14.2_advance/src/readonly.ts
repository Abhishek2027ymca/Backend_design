
// wehenver i want  to no t to chnage a values in an arrrya 
// we can use readonly 


// we know w can alwasys chnage internl value of an array but we can not reassign the array


const obj = {
      name : 'abhishek' ,
    age : 23    ,
    email : "dsfj",


}
obj.name = 'sdffg'// yes it is allowed to change the internal value of an object


// interbal value and obje,itself is not allowed chnage 


interface config {
    readonly endpoint : string ;
     readonly  apikey : string ;

}

const configg : Readonly<config> = {
    endpoint : "https://api.example.com",
    apikey : "1234567890"
};

//configg.endpoint = "https://api.newexample.com" // error : cannot assign to 'endpoint' because it is a read-only property