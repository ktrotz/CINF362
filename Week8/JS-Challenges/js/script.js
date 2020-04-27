//Question 1
function printSum() {
    var num1, num2, num3, output;
  
    // Get the value of the input fields
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num3 = parseInt(document.getElementById("num3").value);

    //calculate sum and average
    sum = num1 + num2 + num3;
    average = sum/3;
  
    if (isNaN(sum) ) //if sum is not a number
      output = "Input not valid";
    else 
      output = "You entered the numbers " +  num1 + ", " + num2 + 
        " and " + num3 +  " The total of these numbers is " + sum + 
        " and the average is " + average;
    
    //print output
    document.getElementById("sumOutput").innerHTML = output;
  }

//Question 2
function nameInfo(name){
    var letterCount = 0;
    var nameSize; //text

    letterCount = name.length;

    //determine letter size text ouput
    if(letterCount < 5)
        nameSize = "short";
    else if (letterCount >= 5 && letterCount <= 8)
        nameSize = "average";
    else
        nameSize = "long";

    output = "Your name is " + name + ". This name is " + letterCount + 
        " letters long and considered to be a " + nameSize + " name.";

    //print output
    document.getElementById("nameOutput").innerHTML = output;
  }

//Question 3
function catdog(){
    var output;

    //loop to 100
    for(i = 1; i <= 100; i++){

        if((i%3) == 0) //check if divisible by 3
            output = "Cat";
        else if((i%5) == 0) //check if divisible by 5
            output = "Dog";
        else //set it to the index counter
            output = i;

        if( ((i%3) == 0) && ((i%5) == 0) ) //check if divisible by 3 and 5
            output = "CatDog";

        console.log(output); //print to console
    }
}

//Question 4
function numberAdder(number){

    number = parseInt(number);
    var sum = 0;

    for(i = 1; i <= number; i++){
        sum = sum + i;
    }

    //print output
    document.getElementById("numberOutput").innerHTML = sum;
}

//Question 5
function secondForm(input){
    document.getElementById("finalForm").innerHTML = "This is my <b>second</b> form!";
}

function finalForm(){
    document.getElementById("finalForm").innerHTML = "<b>THIS</b> is my final form!";
}