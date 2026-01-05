

class rectangle {
    // defining the cparametric constructor 
    // dont we need  to intialize the varibale first outside of the consrructor ?
    // do so 
    //  var width ;
    //  var height ;
    //  var color ;              no need in js 
    constructor( width, height , color) {
        this.width = width;
        this.height = height;
        this.color = color ;
    }
     
     
    area(){
        const are = this.width* this.height ;
        return are ;
    }

    paint (){
        console.log(`the color is ${this.color}`);
        
    }
}


// now intialize the  construchtor 

// no need  of any boier plate 
//  coant  object = new classname( requred arg) // only because there is paramnetric costurctor 

// 
const rect1 = new rectangle(50,60,"red");
const area = rect1.area();
console.log(area);




const now = new Date();
console.log(now.getMonth());


// map is simialr  to object but it has some diffrence 
    // relate key value pair with array and object 
const map = new Map();
map.set("name","harry");
map.set("age" , 33);
console.log(map.get("name"));

const firstname = map.get('name');
console.log(firstname);

map.get('name');
map.set("key" , "value")
map.get('key');
