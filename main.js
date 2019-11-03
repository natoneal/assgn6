var glaze='none';
var amount=1;
var cartcount=0;
var shoppingCartArray = [];


//changing the image shown according to topping
function toppingImage() {
    glaze = document.getElementById("selectTopping").value;
        console.log(document.getElementById("selectTopping").value);
        console.log(top);
//no glaze
    if (glaze === "none") {
        document.getElementById('van').src="./images/none.svg";
        console.log('dfjaldkfjakdfgja')
    }
//chocolate glaze
    if (glaze === "Double-Chocolate") {
        document.getElementById('van').src="./images/SVG/walnut.svg";
        console.log('Double-Chocolate')
    }
//vanilla glaze
    if (glaze === "nilla") {
        document.getElementById('van').src="./images/SVG/vanilla.svg";
        console.log('nilla')
    }
//sugar
    if (glaze === "sugar") {
        document.getElementById('van').src="./images/SVG/gluten free.svg";
        console.log('sugar')
    }

}

//this will show the amount of items added to the cart at the top of the crean in the menu
function cartAmount() {
    amount = document.getElementById("amount").value;
    //set string to integer
    amount = parseInt(amount);

}

//create new obj. template
function cartItem(glaze, amount){
    this.glaze = glaze;
    this.amount = amount;
}

//this continues adding the amount added to cart
function addToCart() {
    cartcount=amount+cartcount;
    document.getElementById("cartNum").innerHTML=cartcount;
    console.log(cartNum)

    var cartObject = new cartItem(glaze, amount);

//check if local storage is empty in order to the add the cart object
    if (localStorage.getItem("shoppingCartArray") !== null){
        shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray")); //change back to array
    }
//
    shoppingCartArray.push(cartObject);
    localStorage.setItem("shoppingCartArray", JSON.stringify(shoppingCartArray)); //change to string
    console.log(localStorage.getItem("shoppingCartArray"));

}

function Checkout() {
    console.log("in checkout");

    if (localStorage.getItem("shoppingCartArray") != null){
         shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray")); //change back to array
     }


    for (i = 0; i < shoppingCartArray.length; i++) {   //for each item in the array:
        console.log('item ' + i + ' glaze: ' + shoppingCartArray[i].glaze + ', amount: ' + shoppingCartArray[i].amount);
            var elmnt = document.getElementById("item");
            var cln = elmnt.cloneNode(true);
            elmnt.childNodes[5].childNodes[1].innerHTML = shoppingCartArray[i].glaze;
            elmnt.childNodes[5].childNodes[3].innerHTML = shoppingCartArray[i].amount;
            console.log("i is: " + i);
            elmnt.childNodes[1].onclick = function(i){
                 shoppingCartArray.splice(i, 1);
                 localStorage.setItem("shoppingCartArray", JSON.stringify(shoppingCartArray));
                 location.reload();
             }
            cln.childNodes[1].onclick = function(x){
                 shoppingCartArray.splice(x, 1);
                 console.log('x is: ' + x);
                 localStorage.setItem("shoppingCartArray", JSON.stringify(shoppingCartArray));
                 location.reload();
             }

            document.getElementById("background-image").appendChild(cln);

  }
}