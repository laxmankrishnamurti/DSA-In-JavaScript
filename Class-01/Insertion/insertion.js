const marks = [95,85,91,89,75,85]

/**
 * For insertion of a new element in existing array we have a pre-defined function and that is :: splice()
 * 
 * Structure of the method ::
 * splice(Position, No. of element is going to be deleted, new Item) 
 */

//let's do it with the function.

console.log(marks);   //Output :: (6) [95, 85, 91, 89, 75, 85]

// marks.splice(2, 0, 100);

// console.log(marks);  //Output :: (7) [95, 85, 100, 91, 89, 75, 85]  

/**
 * It looks like so easy but we are not going to use the function instead of this we are going to create own methods or function that do the same task as splice method can do.
 */

//if we try by this method which is given below then see what happen with the array.

// marks[2] = 100;
// console.log(marks);  //Output :: (7) [95, 85, 100, 91, 89, 75, 85]

//awesome! we achieve our desire result. But, wait a second and thik how the internal mechanism is working. Because, these are pre-biuld methods which is fine to use but if we talk in terms of DSA it's not useful for us. Because we don't know how the thing work internally or how we can do the same with our own logic. Let's try to do it..........

//Now, we required two parameters (1) The index value from where we are going to insert the new element and (2) The new element value. So, let's create two variables to hold the values.

let index = 2;
let newElement = 100;

//can we do this using loop? well.... let's try it

// for(let i = 0; i < marks.length; i++){
//   if(i == 2){
//     marks[index] = newElement;
//   }
// }
// console.log(marks);

//Output :: (7) [95, 85, 100, 91, 89, 75, 85]

//awesome! again we got it. But it's not like that. Actually if you see the previous one method (marks[2] = 100) is same as we done here. Actually, our main purpose is to know how the things work under the hood. Like when we write "marks[index]" then how the method is actually working?

//Finally let's build our own logic to do that.

for(let i = (marks.length - 1); i >= index; i--){
  if(i >= index){
    marks[i + 1] = marks[i];
    if(i == index){
      marks[i] = newElement;
    }
  }
}

console.log(marks);

//Output : (7) [95, 85, 100, 91, 89, 75, 85]

//Finally, we got that how the replacing function work internally.

/**
 * Q :: We have some additional task to do and that is give the both of data index and value from the user and set it according to it. Because, at the end of the day we are going to create someting for the user not for us. 
 * 
 * let's go to do that ............
 */

//create two input are first one for index and second one is for newElement and a button. When user click the button then the value should be added in the array and display on the newly created array.

const current = document.querySelector('#current');
const value = document.getElementById('value');
const indexValue = document.getElementById('index');
const submit = document.querySelector('#submit-btn');

//New Element Validation

const elementValidation = function(inputValue){
  console.log('all is good')
  if(isNaN(inputValue)){
    alert('Please enter a valid input');
  }else if(inputValue < 0){
    alert('Marks should be Positive');
  }else{
    return true;
  }
}

//Index value validation

const indexValidation = function(index){
  console.log('Valid index')
  if(isNaN(index)){
    alert('Please input a valid index');
  }else if(index < 0){
    alert('Indexing value should be a Positive Integer');
  }else if(index >= marks.length){
    alert('Indexing OverFlow');
  }else{
    return true;
  }
}

//Add EventListener to run all the functions

submit.addEventListener('click', function(){
  let newElement = value.value;
  let index = indexValue.value;
  
  //Inserting new values in the array

  if(elementValidation(newElement) && indexValidation(index)){
    for(let i = (marks.length - 1); i >= index; i--){
      if(i >= index){
        console.log('working')
        marks[i + 1] = marks[i];
        if(i == index){
          marks[i] = newElement;
        }
      }
    }
  }
  
  current.textContent = `Current Values : ${marks}`;
})
