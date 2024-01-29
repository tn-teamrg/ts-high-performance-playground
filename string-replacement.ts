console.info(`[INFO] -- string-replacement.ts`);

let baseString: string = createString();

const replacementCharacter: string = '|';
let time5: number = Date.now();

for (let i = 0; i < 50000; i++){
	baseString.split(' ').join(replacementCharacter);
}

let time6: number = Date.now();
console.info('[INFO] -- time difference (SplitJoin): ', time6 - time5);

time5 = Date.now();
for (let i = 0; i < 50000; i++){
	baseString.replace(/ /g, replacementCharacter);
}

time6 = Date.now();
console.info('[INFO] -- time difference (Replace_w_RegExp): ', time6 - time5);

function createString(): string{
	return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
}