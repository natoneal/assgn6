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
// if (amt == 1) {
//     amount = 1;
//     console.log('1')
//     }

//     if (amt == 3) {
//         amount=3;
//         console.log('3')
//     }

//     if (amt == 6) {
//         amount = 6;
//         console.log('6')
//     }

//     if (amt == 12) {
//         amount = 12;
//         console.log('12')
//     }

}

//this continues adding the amount added to cart
function addToCart() {
    cartcount=amount+cartcount;
    document.getElementById("cartNum").innerHTML=cartcount;
    console.log(cartNum)

    var cartObject = new cartItem(glaze, amount);

    if (localStorage.getItem("shoppingCartArray") != null){
        shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray"));
    }

    shoppingCartArray.push(cartObject);
    localStorage.setItem("shoppingCartArray", JSON.stringify(shoppingCartArray));
    console.log(localStorage.getItem("shoppingCartArray"));

}

//create new obj.
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

//create new object
// var cartItem = {toppingSelect:glaze, amtSelect:amount};

    // cartItem.glaze1 = document.getElementById("selectTopping").value;
    // cartItem.amount1 = document.getElementById("amount").value;

    // document.getElementById("addtoCart").innerHTML = cartItem.glaze1e + cartItem.amount1;


// function cartItem(addtoCart){
//     this.glaze = glaze;
//     console.log(glaze)
//     this.amount1 = amt;
//     console.log(amt)
//     var Obj = document.theform.Obj.value;
//     this.returnObj = function(){
//         return Obj;
//     }
// };




// document.getElementById("demo").innerHTML = cartItem.toppingSelect + cartItem.amtSelect;
// function cartItem(topping) {
//     amt: amt;
//     this.topping = document.getElementById("selectTopping").value;
// }

// cartItem.prototype = {
//     getInfo: function() {
//       return 'A ' + this.color + ' ' + this.desc + '.';
//     },
//     drive: function() {
//       //DO SOMETHING
//     },
//     stop: function() {
//       //DO SOMETHING
//     }
// };

// function cartItem(glaze, amount) {
//         console.log(enter);
//         glaze = (document.getElementById("selectTopping").value);
//                 console.log(glaze);
//         amount = document.getElementById("amount").value;
//                 console.log(amount);
//         return cartItem();
//         // console.log(cartItem),
// }

// Object.create(cartItem());

// var shoppingCart = [];
// function displayShoppingCart (){};

