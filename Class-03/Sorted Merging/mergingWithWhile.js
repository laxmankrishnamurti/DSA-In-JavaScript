const marks1 = [20,25,26,32,35,39,40,45,48,80,85,98];
const marks2 = [56,59,69,70,75];
const totalMarks = [];
let m1 = 0;
let m2 = 0;
let tm = 0;

while(m1 < marks1.length && m2 < marks2.length){
    if(marks1[m1] < marks2[m2]){
        totalMarks[tm] = marks1[m1];
        m1++;
    }else{
        totalMarks[tm] = marks2[m2];
        m2++;
    }
    tm++
}

while(m1 < marks1.length){
    totalMarks[tm] = marks1[m1];
    m1++;
    tm++;
}

console.log(totalMarks)