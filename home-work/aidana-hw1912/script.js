// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 10
//   if (a === 10){    
//       console.log("верно");
//   }else{
//        console.log("не верно");
//  }

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// let a=50
// let b=100
//   if (a>b){
//    console.log("а больше b")
//  }else{
//    console.log("a меньше b");
//  }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.

// let a=-2
// if(a>0){
//     console.log("positiv");
// }else if(a===0){
//     console.log("равно");
// }else{
//     console.log("negative");
// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let num=44
// if(num % 2 === 0 ){
//     console.log("четное число");
// }else{
//     console.log("нечетное число");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".

// let a=10
// let b=2
// if(a%b===0){
//     console.log("четное число");
// }else{
//     console.log("нечетное число");
// }

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s=(3===3)
//  console.log(typeof s);

// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a=6
// if(a>1 && a<9){
//     console.log("верно");
// }else{
//     console.log("неверно");
// }

// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.

// let a = 8;
// if (a === 3 || a === 7) {
//     console.log(a + 7);
// } else {
//    console.log(a/10);
// }

// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// let a=-5
// let b=6
// if(a<=0 && b>=5){
//   console.log(a+b);
// } else{
//     console.log(a-b);
// }

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a=7
// let b=6
// if(a>4 && a<10 || b>=7 && b<17){
//     console.log("верно");
// }else{
//     console.log("неверно");
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month =4
// if (month >= 1 && month <= 2 || month === 12 && typeof month ==="number" ) {
//     console.log("зима");
// } else if (month >= 3 && month <= 5 && typeof month ==="number" ) {
//     console.log("весна");
// } else if (month >= 6 && month <= 8 && typeof month ==="number" ) {
//     console.log("лето");
// } else if (month >= 9 && month <= 11 && typeof month ==="number" ) {
//     console.log("осень");
// } else {
//     console.log("некоректный месяц");
// }

// let month =4
// if(month>=1 && month<=12 && typeof month==="number"){
//     if(month>=3 && month<=5){
//         console.log("vesna");
//     }else if(month>=6 && month<=8){
//         console.log("leto");
//     }else if(month>=9 && month<=11){
//         console.log("osen");
//     }else {
//         console.log("zima");
//     }
// }else{
//     console.log("введите число от 1 до 12");
// }


// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day=10
// if(day>=1 && day<=10 && typeof day=== "number"){
//     console.log("первая");
// }else if(day>=10 && day<=20  && typeof day=== "number"){
//     console.log("вторая");
// }else if(day>=20 && day<=31  && typeof day=== "number"){
//     console.log("третья");
// }else{
//     console.log("некоректная декада");
// }

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.

// let a = "12345"
// if( a[0] === "1" || a[0] === "2" || a[0] === "3" ){
//     console.log("da");
// }else{
//     console.log("net");
// }

// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне ** год", "Мне ** лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.



// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".

// let time=3
// if(time>=1 && time<=14 || time===59){
//     console.log("первая четверть");
// }else if(time>=15 && time<=29){
//     console.log("вторая четверть");
// }else if(time>=30 && time<=44){
//     console.log("третья четверть");
// }else if(time>=45 && time<=59){
//     console.log("четвертая четверть");
// }else{
//     console.log("неверное число");
// }














//привидение типов метод

// let num=6 из числа в строку

//1 toString()
// console.log(num .toString());

//2 String(6)
// console.log(String(num));

//3 num + ""
// console.log(num + "");

// let str="6"

//1 Number (6) из строки в число
// console.log(Number(str));

//2 + перед переменной
// console.log(+str);

//3 parseInt(str)
// console.log(parseInt(str));

//обратится в последнему симфолу
// let str = "hellornkjn"
// console.log(str [str.length -1]);