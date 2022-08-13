/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

// Test data 1
let marksMass = 78;
let johnsMass = 92;
let marksHeight = 1.69;
let johnsHeight = 1.95;

let markBMI = marksMass / marksHeight ** 2;
let johnBMI = johnsMass / johnsHeight ** 2;
console.log(markBMI,johnBMI);
let markHigherBMI = markBMI > johnBMI;

console.log('test data 1',markHigherBMI);

// Test data 2
marksMass = 95;
johnsMass = 85;
marksHeight = 1.88;
johnsHeight = 1.76;

markBMI =  marksMass / marksHeight ** 2;
johnBMI = johnsMass / johnsHeight ** 2;

console.log(markBMI,johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log('Test data 2',markHigherBMI);
