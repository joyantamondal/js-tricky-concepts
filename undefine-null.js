/*

 
3)

*/
// 1) varibale value not assigned
let first;
console.log(first);
// 2) function but didn't write return anything 
function second(x,y){
    const z = x+y
}
const sum = second(5,6);
console.log(sum)
//3) return added but not define wich variable return 
function third(a,b){
    const sum1 = a+b;
     if(a>20){
         return;
     }
}
const thirdSum = third(10,20);
console.log(thirdSum)
//4)parameter that isn't passed
function fourth(p,q){
    const  pq= p+q;
    console.log(q);
    return pq;

}
const fourthSum= fourth(10)

//5)propery doesn't exist in an object
const fifth = {name:'a'};
console.log(fifth.phone);

//6) accessing array element out of range
const six =[7,9,7];
console.log(six[10]);

//7) accessing array deleted element
//7) accessing array deleted element
const seven =[7,9,7];
delete seven[1];
console.log(seven);
console.log(seven[1]);

//8) null set by default for server site data using sometimes for checking docs given or not
const eight= {name:'Joyanta', profession:null}
console.log(eight.profession)

