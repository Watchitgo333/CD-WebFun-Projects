//This variable holds the childs height in inches
var childsHeight = 54
//This function is a conditional to display whether or not the child is tall enough to ride the rollercoaster.
function displayIfChildIsAbleToRideTheRollercoaster(){
    if (childsHeight >= 52 ) {
        console.log("Get on the ride, kiddo!");  //If the child is 52 or more inches tall they can ride.
    }
    else {
        console.log("Sorry kiddo. Maybe next year.") //If the child is less than 52 inches they cannot ride.
    }
}
//displayIfChildIsAbleToRideTheRollercoaster() //Calls the function.
x = 5;
x=x+x;
console.log(x);
function returnArray(arr) {
    for(var i = 0; i < arr.length; i ++) {
        if(arr[i] > x) {
            arr[i] = arr[i] ;
        }
        if(arr[i] < x) {
            arr[i] = x;
        }
        }
        console.log(arr);
        var arrNew = arr;
        return arrNew
}
var arr = [1,3,12,20];
returnArray(arr);
console.log(returnArray);