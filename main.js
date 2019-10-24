var glaze='none';
var amount=1;
var cartcount=0;



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
amt = document.getElementById("amount").value;

if (amt == 1) {
    amount = 1;
    console.log('1')
    }

    if (amt == 3) {
        amount=3;
        console.log('3')
    }

    if (amt == 6) {
        amount = 6;
        console.log('6')
    }

    if (amt == 12) {
        amount = 12;
        console.log('12')
    }


}

//this continues adding the amount added to cart
function addToCart() {

    cartcount=amount+cartcount;
    document.getElementById("cartNum").innerHTML=cartcount;

}