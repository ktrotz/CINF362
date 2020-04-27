//Challenge 1
//create variables
var modalBtn = document.getElementById("summonModal");
var closeBtn = document.querySelector(".closeModal");
var hide = document.querySelector(".hide");

modalBtn.onclick = function openModal(){
  hide.style.visibility = "visible"; //view modal
}

closeBtn.onclick = function closeModal(){
  hide.style.visibility = "hidden"; //hide modal
}


//Challenge 2
var changeColorButton = document.getElementById("submitColor"); //create button variable
changeColorButton.onclick = function changeBoxColor(){

  // change box color
  var box = document.getElementById("box");
  var color = document.getElementById("colorInput").value; //get color input
  box.style.background = color;

}


//Challenge 3
var orderButton =  document.getElementById("submitOrder"); //create button variable

orderButton.onclick = function processOrder(){ //calculate order receipt

  //set price and input amount
  var burgersPrice = 4.00;
  var burgersAmt = parseInt(document.getElementById("burgers").value);
  if(isNaN(burgersAmt)) //if not a number or no input found set to zero
    burgersAmt = 0;

  var hotdogsPrice = 2.75;
  var hotdogsAmt = parseInt(document.getElementById("hotdogs").value);
  if(isNaN(hotdogsAmt))
    hotdogsAmt = 0;
  
  var friesPrice = 2.00;
  var friesAmt = parseInt(document.getElementById("fries").value);
  if(isNaN(friesAmt))
    friesAmt = 0;

  var drinksPrice = 1.50;
  var drinksAmt = parseInt(document.getElementById("drinks").value);
  if(isNaN(drinksAmt))
    drinksAmt = 0;

  //calculate totals
  var burgersTotal = (burgersAmt * burgersPrice);
  var hotdogsTotal = (hotdogsAmt * hotdogsPrice);
  var friesTotal = (friesAmt * friesPrice);
  var drinksTotal = (drinksAmt * drinksPrice);
  var total = burgersTotal + hotdogsTotal + friesTotal + drinksTotal;

  output = "You have ordered " + burgersAmt + " burger(s), " + hotdogsAmt + " hotdog(s), " 
    + friesAmt + " order(s) of fries, and " + drinksAmt + " drink(s). Your total is $" + total + ".";
  
  document.getElementById("orderTotal").innerHTML = output;
}


//Challenge 4
var hobbyButton = document.getElementById("submitHobbies"); //create button variable
hobbyButton.onclick = function hobbyList(){

  var hobbies = document.getElementById("hobbies").value; //get input values

  hobbies = hobbies.split(","); //split input by delimiter 

  hobbiesContainer = document.getElementById("hobbiesContainer"); //get list ul

  for(i = 0; i < hobbies.length; i++){

    //create list items and add them each to the list
    listItem = document.createElement('li'); 
    listItem.innerHTML = hobbies[i];
    hobbiesContainer.appendChild(listItem);
  }
}