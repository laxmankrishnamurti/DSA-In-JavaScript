// With Sorted 

const teenMarks = [20,25,26,32,35,39,40,45,48,80,85,98];
const childMarks = [56,59,69,70,75];
const totalMarks = [];
let m1 = 0;
let m2 = 0;
let tm = 0;

while(m1 < teenMarks.length && m2 < childMarks.length){
    if(teenMarks[m1] < childMarks[m2]){
        totalMarks[tm] = teenMarks[m1];
        m1++;
    }else{
        totalMarks[tm] = childMarks[m2];
        m2++;
    }
    tm++
}

while(m1 < teenMarks.length){
    totalMarks[tm] = teenMarks[m1];
    m1++;
    tm++;
}
console.log(totalMarks)

//Output :: (17) [20, 25, 26, 32, 35, 39, 40, 45, 48, 56, 59, 69, 70, 75, 80, 85, 98]


//Without sorted 

const marks1 = [95,98,74,86,85,90];
const marks2 = [56,48,66,59,96,42,36,96,69];
let collection=[];

for(let i = 0; i < marks1.length; i++){
    collection[i] = marks1[i];
}

for(let i = 0; i < marks2.length; i++){
    collection[marks1.length + i] = marks2[i]
}
console.log(collection)

//Output :: (15) [95, 98, 74, 86, 85, 90, 56, 48, 66, 59, 96, 42, 36, 96, 69]

/**
 * What is Algorithm?
 * 
 * ans :- The Process to access or arrange the data called Algorithm.
 * 
 * Keeping this in mind here two things is going to be happen. (1) Time Complexity  (2) Space Complexity. Because, there can be multiple solution of a problem. So with that these two things are going to be happen.
 * 
 * What is Time Complexity?
 * 
 * ans :- The time complexity is mainly calculated by counting the number of steps to finish the execution. It dosen't depend on System.
 * 
 * EX :: 1st solution - (line no 3 to 26) hence, total number of line is = 26 - 3 = 23
 *       2nd solution - (line no 33 to 44) hence, total number of line is = 44 - 33 = 10
 * 
 * so, with that it seems like 2nd solution is better than 1st solution because it takes on 10 lines of code. But, the game is not over we should also calculate the Space Complexity of both solution.
 * 
 * What is Space Complexity?
 * 
 * ans :- Space complexity is the amount of space required to solve a problem.
 * 
 *        Space Complexity = Auxilary space + Input size (varibales size) 
 *          
 *        Auxilary Space :: Auxiliary space refers to the extra space or the temporary space that an algorithm uses. 
 */

/**
 * And when we compair both Algorithms then the result will also looks like same as previous. But, it's not like that there are a huge different in both of Algorihtms.
 * 
 * 1st = 23 line of code
 * 2nd = 10 line of code    , But, the 1st for loop is running 5times and second one is 8 times. So, with that the total number of line is = 10 + 5 + 8 = 23 line of code 
 * 
 * Now, it looks like both algorithms are same. But, wait a while here 1st algorithms gives sorted array but 2nd algorithm not. And if we try to sort an array with 2nd algorithm then it takes huge line of code. Think, about the scenario when we have 1millions of data in an array and we are trying to merge and sort the array then that time which one algorithm is suitable. Obviously the 1st one is better in that scenario.  
 */