//all positive or negative numbers is truthy
//zero(0) is false
//all string even empty string is truthy
//any type of value is undefine is falsy
//null is also falsy
//NAN is falsy
//[] array is truthy 
//{} object is truthy
//anything else that is not falsy will be truthy
const x= 'h';
if(x){
    console.log('truthy',x);
}
else{
    console.log('falsy',x)
}