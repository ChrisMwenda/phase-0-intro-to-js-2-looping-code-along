
function writeCards(obj,event){
   let message=[]
   for(let i=0;i<obj.length;i++){
   message.push(`Thank you, ${obj[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
writeCards(['Guadalupe','Ollie', 'Aki'],"surprise");

function countDown(num1){
    while(num1>=0){
        console.log(num1--);     

    }
}
countDown(4);