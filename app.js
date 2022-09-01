var carts = document.querySelector(".cart-box").childNodes; // carts stockina fiha les child ta3 cart box 
var plus = carts[1];   // hna declarina variable increrase w derna selection child 2 eme ta3 cart box 
var plusCart1 = plus.childNodes[7];  // hna derna selection child ta3 plus avec l'index numero 8 li how button increase 
var tshirtPrice = 250;
var textPrice1 = carts[1].childNodes[3]; // derna selection ta3 element p li fih text price 
var tshirtQuantity = 1;
var textQuantity1 = carts[1].childNodes[5];
var trashCart1= carts[1].childNodes[11];
var heartCart1 = carts[1].childNodes[13];
var buttonColor = false; 
var totalPrice = document.querySelector(".total-price")
totalPrice.textContent = "Total Price : 500 DA" ; // vue que ktbt variable f global scope tektab le text dakehl element h2 (by the way h2 f html raho vide)
var x = 500
 
var hoodieCart = carts[3];
var plusCart2= hoodieCart.childNodes[7];
var hoodiePrice = 250;
var textPrice2 = carts[3].childNodes[3];
var hoodieQuantity = 1;
var textQuantity2 = carts[3].childNodes[5];
var trashCart2 = carts[3].childNodes[11];
var heartCart2 = carts[3].childNodes[13];
var buttonColor2 = true;
var ttsomme = 0


function totSum(){
    
    ttsomme= tshirtPrice + hoodiePrice;
    totalPrice.textContent = "Total Price: " + ttsomme + " DA"

}



// ------------------------------------------------------- T-Shirt----------------------------------
// Button plus 
plusCart1.addEventListener("click", function(event){
    tshirtPrice = tshirtPrice + 250; // hna hkmna price w dernah dkhel roho w zdnalo 250 
    textPrice1.textContent = "Price : " + tshirtPrice + " DA"    // lokan ndirha haka textPrice1.textContent = tshirtPrice traficher f browser ghir price bla le texct price : da
    tshirtQuantity = tshirtQuantity + 1;
    textQuantity1.textContent = "Quantity : " + tshirtQuantity;
    //x = x + 250
    //totalPrice.textContent = "Total Price :" + x;
    totSum()
})

// Button moins
var moinsCart1 = carts[1].childNodes[9];  // hna derna 2 eme methode de selection au lieu ndir plus kima lfok derna cart[1] psk le plus = cart[1]


moinsCart1.addEventListener("click", function(event) {

// derna condition bach manhbtoch taht 0 donc le -  , ida kan tshirtPrice > 0 && tshirtQuantity > 0 exuciti la condiction 

if ( tshirtPrice > 0 && tshirtQuantity > 0){
tshirtPrice = tshirtPrice - 250;
textPrice1.textContent = "Price : " + tshirtPrice + " DA"
tshirtQuantity = tshirtQuantity - 1;
textQuantity1.textContent = "Quantity : " + tshirtQuantity;
//ttsomme = ttsomme - 250
//totalPrice.textContent = "Total Price :" + ttsomme;
totSum()
}

})
// remove cart button t-shirt

// sloution 1 : remore cart 1 ---- hna derna function sahla on a selectione onclick avec le nom de la function removeCart() et on a selectioner carts[1] comme parent pour supprimer la cart 1 
/**function removeCart() {
    carts[1].remove()

}
*/

// solution 2 
trashCart1.addEventListener('click', function(event){
    carts[1].remove()
})


// Heart button 
heartCart1.addEventListener("click", function(event){
     // hna derna variable initial buttonColor = false avec une condition que ida buttonColor kan false mdlo color red w raj3o true une fois ncliki 2la btton heart            
    if (buttonColor === false){
        heartCart1.style.color = "red" 
        buttonColor = true;
     
     // hna dert l3akss ki nkliki ncoverti letat true ver false ki nkiliki une 2eme fois w color tatbdel twali black 
    }else if (buttonColor === true){
        heartCart1.style.color = "black" 
        buttonColor = false;
        
    }
/** 2 eme solution 
 
 *  if (heartCart1.style.color === "red" ){
        heartCart1.style.color = "black" 
    }else if (heartCart1.style.color = "black" ){
        heartCart1.style.color = "red" 
    }
 */
   
})


// ------------------------------------------------------- Hoodie ----------------------------------
// Button plus 





plusCart2.addEventListener("click", function(event){
    hoodiePrice = hoodiePrice + 250;
    textPrice2.textContent = "Price : " + hoodiePrice + " DA";
    hoodieQuantity = hoodieQuantity + 1;
    textQuantity2.textContent = "Quantity : " + hoodieQuantity;
   //x = x + 250
 //totalPrice.textContent = "Total Price :" + x;
 totSum()
})


// Button moins

var moinsCart2 = carts[3].childNodes[9]
moinsCart2.addEventListener("click", function(event){
    if (hoodiePrice > 0 && hoodieQuantity > 0) {
        hoodiePrice = hoodiePrice - 250;
        textPrice2.textContent = "Price : " + hoodiePrice + " DA"; 
        hoodieQuantity = hoodieQuantity - 1;
        textQuantity2.textContent = "Quantity: " + hoodieQuantity;
        //ttsomme = ttsomme - 250
        //totalPrice.textContent = "Total Price :" + ttsomme;
        totSum()

    }

})


// remove cart button hoodie 

/** solution 1
 * function removeCart(){
    carts[3].remove()
}
 */
trashCart2.addEventListener("click", function(event){
    carts[3].remove();
})


// button heart 
//(matnsach lazem tjr tselectioner element li rah tkhdem 3lih by creating declaring a variable and giving it a nice name relevant to the purpose of the element)
 
heartCart2.addEventListener("click", function(event){
  if (buttonColor2 === true){
    heartCart2.style.color = "red";
    buttonColor2 = false;

  } else if (buttonColor2 === false){
    heartCart2.style.color = "black"
    buttonColor2 = true;
  }
})


//--------------------------------- Total Price------------------------------------------------->

    



console.log(totalPrice.textContent)