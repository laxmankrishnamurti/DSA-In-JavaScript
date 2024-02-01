//Traversing in Array

const marks = [12,53,45,59,79,56,98,75,85,63,58,99,40,100];

const display = document.getElementById('values');

for(let i = 0; i < marks.length; i++){
  display.innerHTML += `${marks[i]} <br> `;
  // document.write(`${marks[i]} `)
}

/**
 * document.write(`${marks[i]} `)
 * 
 * error :: Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
 * 
 * if we use it in the HTML file with SCRIPT Tag then browser will not get the error.
 */


// Q :: Get indexing value as an input by the user and show it on the Page. 

const Input = document.getElementById('input');
const button = document.getElementById('getMarks');
const showMarks = document.querySelector('#show-marks');

const inputValidation = function(){
  const userInput = Input.value;
  console.log(userInput);
  if(isNaN(userInput)){
    alert('Please enter a valid input');
  }else if(userInput < 0){
    alert('Input should be greater than 0');
  }else if(userInput > (marks.length - 1)){
    alert('Please enter a valid input')
  }else{
    return true;
  }
}

button.addEventListener('click', function(){
  
  if(inputValidation()){
    const userInput = Input.value;
    showMarks.innerHTML = `Index : ${userInput} and value is : ${marks[userInput]}`
  }

});