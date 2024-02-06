/**
 * Before knowing about the analysis and it's notation we should understand that :- There can be multiple solutions of a Problme and because of that Time complexity and the Space complexity will vary. So, now the question is how we choose which solution is the best solution in that scenario. How we choose that particular solution of the problem.
 * 
 * First of all we have a task to find the solution of the problem but now the point is we have more that 1 solution of the problems which one should more efficient in the scenario. Now this is a big deal for us........
 * 
 * Here, comes Asymptotic Anaylysis & Notatios. I think you probebly able to guess that what the Anylysis do. Yes, you are right. The Analysis helps us to find the more efficient solutions in the scenario. And the Notation tells us that In which scenario the solution will perform efficiently. There are three Notaions of the Analysis. These are follows ---
 * 
 * (1). Big O Notation {Worst case scenario}
 * (2). Omega Notation {Average case scenario}
 * (3). Thita Notation {Best case scenario}
 * 
 * The word Asymptotic means approaching a value or curve arbitrarily closely (i.e., as some sort of limit is taken). It is a technique of representing limiting behavior. The methodology has the applications across science. It can be used to analyze the performance of an algorithm for some large data set.
 * 
 * Why is Asymptotic Notation Important?
 *  
 *  1. They give simple characteristics of an algorithm's efficiency.
 *  2. They allow the comparisons of the performances of various algorithms.
 */

/**
 * Time complextity is a big thread than Space complexity because, space complexity is limited so that's why it can be mannaged. But, if we talk about the Time complexity then it depends upon the solution of the problem so that's why it is very important to write the program which Time complexity is minimum as much as we can.
 */

/**
 * Time complexity is directly perposnal to Input. And based on this we have an equation to calculate Time complexity of a Program. But, before going to deep dive into the quation we should understand that "Data Sctructure and Algorithm" comes when we have large amount of data. The Equation is below :- 
 * 
 *      f(n) = 5n^2 + 6n + 12           Where n = Number of input
 *              Here, 6n + 12 will ignored because it value is far lesser that the first-one
 * 
 *          n               n^2             6n              12  
 *          1              21.74%         26.09%          52.17%
 *         100             98.79%          1.19%           0.02%
 *        1000             99.88%          0.12%          0.0002%
 */