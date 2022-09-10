// Function methods:call,apply and bind

const cat = {type:'cat',sound:'Meow'};
const dog = {type:'dog',sound:'Woof'};

function Say(message){
  console.log(message,new.target);
  const speaks =`${this.type} speaks ${this.sound}`;
  console.log(speaks);
  if(!new.target){
    throw new Error('This function should be called with constructor');
  }
  return speaks;
}

const a = new Say('Lion');

var greeting = 'Hi';

const message ={
 greeting:'Hello'
}

function Says(name){
  console.log(this)
  console.log(`${this.greeting}, ${name}`);
}
const s = Says.bind(message,'Anit Kumar');
console.log(s());

function add(x,y){
  return x + y;
}
const adds = add.call(this,20,40);

// Closure
function greetings (){
  let message ='Hi';
  function sayHi(){
    console.log(`${message},John Doe`);
  }
  return sayHi;
}
const namaste = greetings();
console.log(namaste())