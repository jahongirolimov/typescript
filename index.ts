let firstName:string="italia";

let age :number|string;
age=12
age="12"
let myObject:{
    name:string,
    age:number,
    isSingle:boolean
}

myObject={
    name:"jons",
    age:23,
    isSingle:true
}
let myArray:Array<number|string|boolean>;
myArray=[1,2,3,4,5,"aa"]

let strs:any[]=["a","b",7,]
// function circle(diam:number):string{
//     return "Circumf="+Math.PI*diam
// }
interface name{
    name:string,
    image:string[],
    price:string,
    shortDescription:string,
    longDescription:string,
    category:string,
    subCategory:string,
    brant:string,
    count:number,
    
}

interface color{
    name:string
    color:string
}
interface units{
    title:string
    sizes:string[]
}
interface sizes{
    name:string
}
interface sizestwo{
    name:string
}