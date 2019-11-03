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
//html String = "";
// myArr =
//setting up the template for the shopping cart
// function Checkout() {
//   if (localStorage.getItem("shoppingCartArray") !== null) {
//         console.log(localStorage.getItem("shoppingCartArray"));

//         var shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray"));
//         var temp, item, glaze, i;
//           //get the template element:
//         temp = document.getElementsByTagName("template")[0];
//           //get the DIV element from the template:
//         item = temp.content.querySelector("div");
//           //for each item in the array:
//         for (i = 0; i < shoppingCartArray.length; i++) {
//  //           html String += ""
//    //     }
//             //Create a new node, based on the template:
//         //    shoppingCartArray[i].glaze.amount
//             glaze = document.importNode(item, true);
//                 //Add data from the array:
//             glaze.textContent += shoppingCartArray[i];
//                 //append the new node wherever you like:
//             document.body.appendChild(glaze);
//         };
// }
// }



function Checkout() {
    if (localStorage.getItem("shoppingCartArray") !== null){
        shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray")); //change back to array
        console.log(localStorage.getItem("shoppingCartArray"));
    }

    var temp, glaze, amount, i; //get the template element:
    temp = document.getElementsByTagName("template")[0];

    glaze = temp.content.querySelector("div"); //get the DIV element from the template

    for (i = 0; i < shoppingCartArray.length; i++) {   //for each item in the array:
        a = document.importNode(glaze, true); //Create a new node, based on the template:

        a.textContent += shoppingCartArray[i]; //Add data from the array:
        document.body.appendChild(a);    //append the new node wherever you like:
  }
}


function deleteItem(){
    var remove = document.getElementById('deleteItem');
    remove.parentNode.removeChild(remove);
}
// function showContent() {
//   var temp, item, a, i;
//   //get the template element:
//   temp = document.getElementsByTagName("template")[0];
//   //get the DIV element from the template:
//   item = temp.content.querySelector("div");
//   //for each item in the array:
//   for (i = 0; i < myArr.length; i++) {
//     //Create a new node, based on the template:
//     a = document.importNode(item, true);
//     //Add data from the array:
//     a.textContent += myArr[i];
//     //append the new node wherever you like:
//     document.body.appendChild(a);
//   }
// }
//populating the template
// function onload(){
//     if (localStorage.getItem("shoppingCartArray") !== null) {
//         shoppingCartArray = JSON.parse(localStorage.getItem("shoppingCartArray"));
//         template(glaze, amount)
//         };
//     }