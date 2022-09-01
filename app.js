var carts = document.querySelector(".cart-box").childNodes; // we stored cart box children in carts 
var plus = carts[1];   // we declared variable increrase and   selected 2nd child 2 of cart box 
var plusCart1 = plus.childNodes[7];  // we selectedn plus child of index num 8  button increase 
var tshirtPrice = 250;
var textPrice1 = carts[1].childNodes[3]; // we selected element p that contains  price text
var tshirtQuantity = 1;
var textQuantity1 = carts[1].childNodes[5];
var trashCart1= carts[1].childNodes[11];
var heartCart1 = carts[1].childNodes[13];
var buttonColor = false; 
var totalPrice = document.querySelector(".total-price")
totalPrice.textContent = "Total Price : 500 DA" ; // since i wrote variable in global scope the text was written insideelement h2 (by the way h2 f html is empty )
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
    tshirtPrice = tshirtPrice + 250; //  we selected price inside itself and added 250
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

// we added a condition to not decrease under 0 so if tshirtPrice > 0 && tshirtQuantity > 0 excute the condiction 

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

// sloution 1 : remore cart 1 ---- we created a simple function, we selected onclick with the function name removeCart() and we slected carts[1] as parent to delete cart 1 
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
    // we gave buttonColor = false with a condition if buttonColor was false give it color red and turn it true once we click on the heart button
    if (buttonColor === false){
        heartCart1.style.color = "red" 
        buttonColor = true;
     // here we did the oposite, when we click we convert the stat true to false when we click a second time the color changes to black
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
// don't forget you have to select the element that you are targeting by creating declaring a variable and giving it a nice name relevant to the purpose of the element)

 
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