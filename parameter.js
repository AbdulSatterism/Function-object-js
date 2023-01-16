function bringSingra(taka) {
    console.log("Singra kenar jonno taka dise ", taka);
    // singra koyta kinte parbe setar jonno niser ta

    var singraPrice = 10;
    var singraQuantity = taka / singraPrice;
    return singraQuantity;
}

var money = 250
var singra = bringSingra(money);
console.log("Ai nen Apnar singra", singra)



// function bringSingra(taka) {
//     console.log('sungara er jonno dise', taka);
//     console.log('Mama singra den');

//     var singraPrice = 10;
//     var singraQuantity = taka / singraPrice;
//     return singraQuantity;
// }

// var money = 250;

// var singra = bringSingra(money);
// console.log('ai nen singra ', singra)
