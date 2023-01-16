var computer = {
    price: 29000,
    storage: '156gb',
    processor: 'intel i10'
}
// console.log(computer)
// console.log(computer.price);
var computerPrice = computer.processor;

// set a object property value
computer.price = 25000;
// console.log(computer)
// console.log(computerPrice)


// different ways to set a value of an object property

computer.price = 20000;
computer["price"] = 23000;
// console.log(computer)
var propertyPrice = "price";
computer[propertyPrice] = 19000;
console.log(computer)


// storage baraise

var storagePro = "storage";
computer[storagePro] = "512GB";
computer['storage'] = "1TB"
computer.storage = '2tb'
console.log(computer)
