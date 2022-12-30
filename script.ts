// const add=(a: number, b:number)=>{
//     return a+b;
// }

// const person = {
//     name: 'Ariful',
//     age: 30,
//     employ: true
// }

// person.name="sharif";
// person.age=20;
// person.employ=false;

// console.log(person.name);

// const number: (number | string)[]=[];

// number.push("arif", 555);
// number.push(33)
// console.log(number)

// let c:{
//     name:string,
//     age:number,
//     student: boolean,
// };
// c={
//     name: 'khabir',
//     age: 33,
//     student: true
// }

// let num1: any;
// num1="Talha";
// num1 = 333;
// console.log(num1)

// let add1:(x: number , y: number)=>number;

// add1=(x,y)=>{
// return x + y;
// }

// console.log(add1(2,5))


// let calculation:(x: number,y:number,z:string)=>number

// calculation=(a:number,b:number,c:string)=>{
//     if(c === "add"){
//         return a+b
//     }else{
//         return a-b;
//     }
// }

// console.log(calculation(2,5,"dkd"))


class player3 {
    name: string;
    age:number;
    country: string ;
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play(){
        console.log(`${this.name}from  ${this.country}`)
    }
}


const mashrafi = new player3("Mashrafi", 40, "Bangladesh");
const shakib = new player3("Shakib", 38, "Bangladesh");
console.log(mashrafi)
console.log(shakib)

