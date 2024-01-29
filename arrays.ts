console.info(`[INFO] -- arrays-sorting.ts`);

const arr2: number[] = [];
let tmp2: number = 0;

const randomizeArray2 = () => {
	for (let i = 0; i < 50000; i++){
		arr2[i] = Math.floor(Math.random() * 100000);
	}
}
const naiveSort = () => {
	for (let i = 0; i < arr2.length; i++){
		for (let j = 0; j < arr2.length - 1; j++){
			if (arr2[j] > arr2[j + 1]) {
				tmp2 = arr2[j];
				arr2[j] = arr2[j + 1];
				arr2[j + 1] = tmp2;
			}
		}
	}
}
const optimizedSort = () => {
	let swapped: boolean = true;
	while (swapped) {
		for (let j = 0; j < arr2.length - 1; j++){
			swapped = false;
			if (arr2[j] > arr2[j + 1]) {
				swapped = true;
				tmp2 = arr2[j];
				arr2[j] = arr2[j + 1];
				arr2[j + 1] = tmp2;
			}
		}
	}
}

const calculateArrayTimeDifference = (func: () => void): number => {
	randomizeArray2();
	const time8: number = Date.now();
	func();
	const time9: number = Date.now();
	return time9 - time8;
}

console.info(`[INFO] -- calculateArrayTimeDifference: (naiveSort)=== ${calculateArrayTimeDifference(naiveSort)}`);
console.info(`[INFO] -- calculateArrayTimeDifference: (optimizedSort)=== ${calculateArrayTimeDifference(optimizedSort)}`);