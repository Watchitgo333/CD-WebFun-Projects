// The Classic FizzBuzz challenge
for (var i = 1; i < 101; i ++) {
    if (i % 3 == 0 && i % 5 == 0) { //The most specific condition comes first, if numer 'i' is both a multiple of 3 and 5 it will console.log "Fizzbuzz"
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0) {
        console.log("Fizz"); //If i is a multiple of 3 then it will log "Fizz"
    }
    else if (i % 5 == 0) {
        console.log("Buzz"); //If i is a multiple of 5 then it will log "Buzz"
    }
    else {console.log(i); //Else it will log i the number
    }
}