const country = 'India';
const continent = 'Asia';
let population = 33.5;

console.log(country, continent, population);

const isIsLand = false;
let language;

console.log(
	typeof country,
	typeof continent,
	typeof population,
	typeof isIsLand,
	typeof language
);

language = 'Hindi';

// Basic operators
const numberOfPopulationInPart = 33.5 / 2;
console.log(
	'Number of people live is each part = ',
	numberOfPopulationInPart + ' million'
);

population+=1;

console.log('new population',population);

console.log(population > 6);
console.log(33.5/2 < 33)

let description1 = country +  'is in' + continent + ', and its' + population +' million people speak' + language;

// Strings and Template Literals
let description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description2);