const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = '';
  saveData();
}

listContainer.addEventListener('click', function(clicked){
  if(clicked.target.tagName === 'LI'){
    clicked.target.classList.toggle('checked');
    saveData();
  } else if (clicked.target.tagName === 'SPAN') {
    clicked.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML)
}

function showData() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showData();

