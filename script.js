//stampare i numeri da 1 a 100
var richieste = 100;
for(var i = 1; i <= richieste; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

