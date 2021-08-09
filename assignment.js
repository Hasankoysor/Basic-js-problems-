// Problem 1
function seerToMon(seer){

    if(seer<0){
        return "Please Enter Positive seer value!";
    }
    else{
        // 37.3242 kilo == 1 maund
        let mon = seer / 40;
        return mon;
    }
}
console.log(seerToMon(80));

// Problem 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {


    if( shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0 ){
        return "Please Try with Positive intiger!";

    }

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // price calculation
    const shirtPriceQuantity = shirtQuantity *  perShirtPrice;
    const pantPriceQuantity = pantQuantity * perPantPrice;
    const shoePriceQuantity = shoeQuantity * perShoePrice;
    // adding all price quantity
    const totalPrice = shirtPriceQuantity + pantPriceQuantity + shoePriceQuantity;
    return totalPrice;
}

console.log(totalSales(2,3,1));



// Problem 3


function deliveryCost( number){
    const Tshirt1st = 100;
    const Tshirt2nd = 80;
    const Tshirt3rd = 50;

    if( number < 0){
        return "Please Try with Positive intiger!";

    }
    else if ( number <= 100) {
        const count = number * Tshirt1st;
        return count;
    }
    else if (number <= 200) {
        const first100Tshirt = 100 * Tshirt1st;
        const rest_Tshirt = number - 100;
        const Second100Tshirt = rest_Tshirt * Tshirt2nd;
        const totalTshirt = first100Tshirt +  Second100Tshirt;
        return totalTshirt;
    }
    else {
        const first100Tshirt = 100 * Tshirt1st;
        const Second100Tshirt = 100 * Tshirt2nd;
        const rest_Tshirt = number - 200;
        const restofTshirt = rest_Tshirt * Tshirt3rd;
        const totalTshirt = first100Tshirt + Second100Tshirt + restofTshirt;
        return totalTshirt;
    }
}
console.log(deliveryCost(100));

// Problem 4

function perfectFriend(frdList) {
    let friend = 0;
    for(let i=0; i<frdList.length;i++){
        friend = frdList [i];
        if(friend.length == 5){
            return friend;
        }
    }
    
}

var myAllfriends = ['abull','kabui','gabbu','lombus'];
var bestFriend = perfectFriend(myAllfriends);
console.log(bestFriend);


