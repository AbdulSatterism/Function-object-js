// break and continue in while and for loop

// var i = 0;
// while (i < 15) {
//     console.log(i);

//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i <= 20; i++) {
//     console.log(i)
//     if (i == 8) {
//         break;
//     }}



var number = [54, 45, 25, 1000, 47, 16, 18, 29, 12, 35, 35, 68, 65];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     console.log(element);
//     if (element > 100) {
//         break;
//     }
// }




for (var i = 0; i < number.length; i++) {
    var element = number[i];
    if (element > 40) {
        continue;
    }
    console.log(element)
}