const marks1 = [95,98,74,86,85,90];
const marks2 = [56,48,66,59,96,42,36,96,69];
let collection=[];

console.log(collection);

for(let i = 0; i < marks1.length; i++){
    collection[i] = marks1[i];
}

console.log(collection.length);

for(let i = 0; i < marks2.length; i++){
    collection[marks1.length + i] = marks2[i]
}
console.log(collection)