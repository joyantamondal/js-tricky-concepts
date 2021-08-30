// global
const number = 1000;
function add(first,second){
    const sum= first + second;
    // local 
    console.log(sum)
    //global
    console.log(number)

    if(sum>9){
        // block scope mood here 
        const mood ='fine';
        console.log(mood);
    }
    //not find from here mood
    // console.log(mood);
    return sum;

}
const result = add(10,20);

