let form = document.querySelector('form');
let task_input = document.querySelector('.task-input');
let ul = document.querySelector('ul');
let clear = document.querySelector('.clear-task-button');
let collection = document.querySelector('.collection');

form.addEventListener('submit', addTask);
ul.addEventListener('click',removeItems);
clear.addEventListener('click',clearTask);



function addTask() {


      let li = document.createElement('li');
      let collection = document.querySelector('.collection');
      collection.appendChild(li);
      li.classList.add('collection-item');
      let helo = document.createTextNode(task_input.value);
      li.append(helo);
      li.insertAdjacentHTML('beforeend','<a href="#"><i class="fa fa-remove clear-icon"></i></a>');
      task_input.value = '';   
    

}



  function removeItems(e) {
    let li_element = e.target;
    li_element.parentElement.parentElement.remove();
  }


   function clearTask() {
    while(collection.firstChild){

        collection.removeChild(collection.firstChild);
    }
   }
 