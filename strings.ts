console.info(`[INFO] -- strings.ts`);

// calculate time taken to create 50,000 'strings'
let time3: number = Date.now();

for (let i = 0; i < 50000; i++){
	createString_1();
}

let time4: number = Date.now();
console.info('[INFO] -- time difference (createString_1): ', time4 - time3);

// calculate time taken to create 50,000 'Strings'
time3 = Date.now();
for (let i = 0; i < 50000; i++){
	createString_2();
}

time4 = Date.now();
console.info('[INFO] -- time difference (createString_2): ', time4 - time3);

function createString_1(): string {
	return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
}

function createString_2(): String {
	return new String(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
}