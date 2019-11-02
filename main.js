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
    if (glaze === "choco") {
        document.getElementById('van').src="./images/SVG/walnut.svg";
        console.log('choco')
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

//this continues adding the amount added to cart
function addToCart() {
    cartcount=amount+cartcount;
    document.getElementById("cartNum").innerHTML=cartcount;
    console.log(cartNum)

    var cartObject = new cartItem(glaze, amount);

//check if local storage is empty in order to the add the cart object
    if (localStorage.getItem("shoppingCartArray") != null){
        shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray")); //change back to array
    }
//
    shoppingCartArray.push(cartObject);
    localStorage.setItem("shoppingCartArray", JSON.stringify(shoppingCartArray)); //change to string
    console.log(localStorage.getItem("shoppingCartArray"));

}

//create new obj. template
function cartItem(glaze, amount){
    this.glaze = glaze;
    this.amount = amount;
}

function Checkout() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}

function onload(){
    shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray"));


}



