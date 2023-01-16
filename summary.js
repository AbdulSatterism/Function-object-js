var phones = ['iphone', 'samsung', 'lg', 'vivo'];

if (phones.indexOf('oppo') == -1) {
    console.log('oppo is missing')
}
if (phones.indexOf('vivo') != -1) {
    console.log('lg is available')
}

// function 
function add(one, two) {
    var addition = one + two;
    return addition;
}
var result = add(25, 2);
console.log(result);

// object 

var laptop = {
    name: "Dell",
    price: 24000,
    storage: "512GB",
    processor: "celeron dual core processor"
}

laptop.price = 20000;
laptop["price"] = 19000;
var newPrice = "price";
laptop[newPrice] = 15000;

// switch case

var color = "white";
switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'black':
        console.log('color is black');
        break;
    case 'white':
        console.log('color is white');
        break;

    default:
        console.log('there is no match color');

}

// break use
var i = 0;
while (i < 15) {
    console.log(i)
    if (i > 5) {
        break;
    }
    i++
}

// continue

var marks = [35, 36, 25, 45, 65, 85, 95, 45, 87, 89, 75, 68, 84, 90];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    if (element < 80) {
        continue;
    }
    console.log(element)
}