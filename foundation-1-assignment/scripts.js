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

const isFinlandHasMorePopulation = false;
const hasLessPeopleThenAvg = false;

let description ='Portugal is in Europe, and its 11 million people speak portuguese';

// Strings and Template Literals
description = `Portugal is in Europe, and its 11 million people speak portuguese`;