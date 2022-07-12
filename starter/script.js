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

const age = 18;

const dl = age >= 18;

if (dl) {
  console.log(`Hurrey ✔ you are applicable for dl`);
} else {
  console.log(`you have ${18 - age} years to get dl`);
}

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
