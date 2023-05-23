// Нам нужна функция, которая может преобразовать строку в число. 
// Какие способы достижения этого вы знаете?
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


function StringToNumber(str) {
    // console.log(Number(str));
    console.log(Number("1234"));
    console.log(Number("605"));
    console.log(Number("1405"));
    console.log(Number("-7"));
};

// function numberToString(num) {
//     return String(num);
// }

export default StringToNumber;