const marks1 = [99,56,89,85,96,74,58,56,45,25,36,49,78];
// const marks2 = [78,77,69,59,58,36,49,85];

for(let i = 0; i < marks1.length; i++){
    for(let j = 0; j < marks1.length; j++){
        if(marks1[j] > marks1[j + 1]){
            let temp = marks1[j];
            marks1[j] = marks1[j + 1];
            marks1[j + 1] = temp;
        }
    }
}
console.log(marks1);