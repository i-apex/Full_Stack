// console.log("Hello World");

// let age: number = 20;
// if(age<50)
//     age+=10;


let sales: number = 10;
let course:string = 'TypeScript';
let is_Published = true;
let level;

//level is of any type so u can write it whatever

level = 1;
level = 'a';


function render(document:any){
    console.log(document);
}

let numbers = [1,2,3];

numbers.forEach( (n) => {
    n.valueOf();
});

let user: [number, string] = [1, 'Steve'];

user.push(1); //it in actual sense should be wrong

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {Small = 1, Medium , Large};

const mySize: number = Size.Medium;
console.log(mySize);

function calculateTax(amount: number, taxYear?:number):number {
    let x;
    if(amount<50_000 && taxYear === 2020)
        return amount*1.2
    return amount*1.3
    //by default the function returns undefined , which is not equal to number
}

function calculateTax2(amount: number, taxYear:number = 2020):number {
    let x;
    if(amount<50_000 && taxYear === 2020)
        return amount*1.2
    return amount*1.3
    //by default the function returns undefined , which is not equal to number
}

calculateTax(100, 2020);
calculateTax2(100);

type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = {id: 1, name: 'Steve', retire: function(date: Date){
    console.log(date);  
}};


//union of two data types

function kgtoLbs(weight: number | string): number{
    //narrowing

    if(typeof weight === 'number')
        return weight*2.2;
    else 
        return parseInt(weight)*2.2;
}

kgtoLbs(10);
kgtoLbs('10');

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Resizable & Draggable;
let textBox: UIWidget ={
    drag: function(){
        console.log('dragging');
    },

    resize: function(){
        console.log('resizing');
    }
};

//literal (exact, specific)


type Quantity = 50 | 100 |  200;
let quantity: Quantity = 50;

//nullable types

function greet(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola! ');

}

greet(null);

type Customer ={
    birthday?: Date
};


function getCustomer(id:number): Customer | null | undefined{
    return id === 0? null :  {birthday :  new Date()};
}

let customer = getCustomer(0);
// if(customer ! == null && customer ! == undefined)
//     console.log(customer?.birthday?.getFullYear());

//optoinal propery check operator

console.log(customer?.birthday?.getFullYear());