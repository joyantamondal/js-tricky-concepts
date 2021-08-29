// This is primitive data type and immutable
let a= 'boom'
let b= a;
console.log('first',a,b);
a='gelo';
console.log('second',a,b);

//this is non-primitive data type and mutable
const x = {name:'Joyanta'}
const y = x;
console.log(x,y);
x.name='Pori Moni';
console.log(x,y);
 