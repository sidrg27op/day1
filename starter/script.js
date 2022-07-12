const a = ["dif"];
const b = { fname: "op" };

console.log(a);

console.log("op");

// ,m
let s = 232;
let d = 222;

console.log(s <= d);

// const johnWeight = 85;
// const johnHeight = 1.76;

// const johnBmi = johnWeight / johnHeight ** 2;

// console.log(johnBmi);

// const MarkWeight = 95;
// const MarkHeight = 1.88;

// const MarkBmi = MarkWeight / MarkHeight ** 2;

// console.log(MarkBmi);

// const Markhigherbmi = MarkBmi > johnBmi;

// console.log(Markhigherbmi);

// String

console.log(`string\n\
s
op
in
the chat`);

// if else

// const age = 18;

// const dl = age >= 18;

// if (dl) {
//   console.log(`Hurrey ✔ you are applicable for dl`);
// } else {
//   console.log(`you have ${18 - age} years to get dl`);
// }

// challange 2

const johnWeight = 85;
const johnHeight = 1.76;

const johnBmi = johnWeight / johnHeight ** 2;

console.log(johnBmi);

const MarkWeight = 95;
const MarkHeight = 1.88;

const MarkBmi = MarkWeight / MarkHeight ** 2;

if (MarkBmi > johnBmi) {
  console.log(`Mark BMI ${MarkBmi} is greater than john BMI ${johnBmi}`);
} else {
  console.log(`John BMI ${johnBmi} is greater than Mark BMI ${MarkBmi}`);
}

// type conversion

const input = "1099";

console.log(Number(input) + 21);
console.log(input);

// type corrcion

console.log("i am " + 23 + " year old");
console.log("21" - "3" - 2);

// flasy values = 0 , "",undefined,NaN,null

let nuni = 0;
if (nuni) {
  console.log(`my nuni is ${nuni}`);
} else {
  console.log("no nuni");
}

// equality opratiers or not equality =  (===) , (==) , (!==)

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amzaing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23?");

// Boolean logic || or && or !
const nunidaa = true;

console.log(!nunidaa);

// coding challange 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

// switch statement

const dau = "w";

switch (dau) {
  case "op":
    console.log("op");
    break;

  case "open":
    console.log("open");
    break;

  default:
    console.log("obd");
}
