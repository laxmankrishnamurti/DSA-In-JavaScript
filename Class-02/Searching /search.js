const input = document.querySelector('#input');
const button = document.querySelector('#submit');
const defaultDisplay = document.querySelector('#default');
const display = document.querySelector('#display')

const marks = [91,98,95,98,65,85,73,78,54,86,99,42,63,58,69];

defaultDisplay.innerHTML = `Current, mark's list is : ${marks}`

const searchMarks = () => {

    const value = parseInt(input.value);
    let index;

    if(isNaN(value)){
        return alert('Invalid Index Input');
    }

    for(let i = 0; i < marks.length; i++){

        if(marks[i] == value){
            index = [i];
        }
    }
    
    if(index){
        display.innerHTML = `Index vlaue of the input marks is : ${index}`;
    }else{
        return alert('Not Available')
    }

}

button.addEventListener('click', searchMarks);