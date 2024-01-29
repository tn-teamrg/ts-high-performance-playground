// * NOTE: loops and conditions
const arr: Array<number> = [];
let tmp: number = 0;

const randomizeArray = () => {
	for (let i = 0; i < 50000; i++){
		arr[i] = Math.floor(Math.random() * 100000);
	}
}

const dummy = () => null;

const forinLoop = () => {
	let dummy: number;
	for (let i in arr) {
		dummy = arr[i];
	}
}
const forofLoop = () => {
	let dummy: number;
	for (let i of arr) {
		dummy = i;
	}
}
const naiveLoop = () => {
	let dummy: number;
	for (let i = 0; i < arr.length; i++){
		dummy = arr[i];
	}
}
const calculateTimeDifference = (func: () => void): number => {
	randomizeArray();
	const time7: number = Date.now();
	func();
	const time8: number = Date.now();
	return time8 - time7;
}

console.info('[INFO] -- time difference (for of): ', calculateTimeDifference(forofLoop));
console.info('[INFO] -- time difference (for in): ', calculateTimeDifference(forinLoop));
console.info('[INFO] -- time difference (naive): ', calculateTimeDifference(naiveLoop));




const calculateMapTimeDifference = (func: () => void): number => {
	const time1: number = Date.now();
	func();
	const time2: number = Date.now();
	return time2 - time1;
}

const generateGuid = (): string => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
	(c: string) => {
	const r = Math.random() * 16 | 0,
	v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
	});
}

interface Map {
	[key: string]: string;
}

const map: Map = {};

for (let i = 0; i < 50000; i++) {
	map[(i+1).toString()] = generateGuid();
}

// for...in
const mapForIn = () => {
	let dummy: string;
	for (let key in map) {
		dummy = key;
	}
}

// for...of
const mapForOf = () => {
	let dummy: string;
	const keys = Object.keys(map);
	for (let key of keys) {
		dummy = key;
	}
}

// naive
const mapForNaive = () => {
	let dummy: string;
	const keys = Object.keys(map);
	for (let i = 0; i < 50000; i++) {
		dummy = keys[i];
	}
}

console.info('[INFO] -- Time Difference (map: for of): ', calculateMapTimeDifference(mapForOf));
console.info('[INFO] -- Time Difference (map: for in): ', calculateMapTimeDifference(mapForIn));
console.info('[INFO] -- Time Difference (map: naive): ', calculateMapTimeDifference(mapForNaive));

// console.info(`[INFO] -- Time Difference (map: for of): ${calculateMapTimeDifference(mapForOf)}`);
// console.info(`[INFO] -- Time Difference (map: for in): ${calculateMapTimeDifference(mapForIn)}`);
// console.info(`[INFO] -- Time Difference (map: naive): ${calculateMapTimeDifference(mapForNaive)}`);



// * NOTE: linear search
let decision: number = Math.floor(Math.random() * 100) + 1; // * NOTE: random numbers between 1 and 100

if (decision === 1) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 2) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 3) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 4) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 5) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 6) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 7) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 8) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 9) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 10) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 11) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 12) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 13) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 14) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 15) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 16) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 17) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 18) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 19) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 20) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 21) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 22) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 23) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 24) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 25) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 26) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 27) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 28) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 29) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 30) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 31) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 32) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 33) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 34) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 35) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 36) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 37) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 38) {
	console.info(`[INFO] -- decision===$${decision}`);
} else if (decision === 39) {
	console.info(`[INFO] -- decision===$${decision}`);
} else (decision === 40){
	console.info(`[INFO] -- decision===$${decision}`);
}

// ! TODO: binary search
