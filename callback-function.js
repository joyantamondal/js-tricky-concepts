function welcomeMessage (name, greetHandler){
    console.log(greetHandler);
    greetHandler(name);
}

/* 
// Array sending to the function
const names = ['Tom Hero','Tom Shamol','Tom Samsu'] 
welcomeMessage(names);
*/

/* 
// object send to the function
const nameObj ={name:'Pori Mala',age:16, profession: 'singer'};
welcomeMessage(nameObj); 
*/

// function pass into another function
function greetMorning(name){
    console.log('Good Morning',name);
}
welcomeMessage('Hero',greetMorning);
welcomeMessage('Hero Pro',greetMorning);
// function pass into another function
function greetAfternoon(name){
    console.log('Good Afternoon',name);
}
welcomeMessage('Hero',greetAfternoon);
function work(x, y = 4){

    return x + y;
    
    }
    
    console.log(work(32);