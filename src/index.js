document.addEventListener("DOMContentLoaded", () => {

  function createTask(task){
    let ul = document.getElementById('tasks')
    let li = document.createElement('li')
        li.innerText=`${task}`

        var removeTask = document.createElement('input');
        removeTask.setAttribute('type', 'button');
        removeTask.setAttribute("value", "x");
        removeTask.setAttribute("id", "removeButton");
        removeTask.addEventListener('click', function(e) {
            li.parentNode.removeChild(li);
        }, false);
        li.appendChild(removeTask);

    ul.appendChild(li)


  }



   let description = document.getElementById("new-task-description")
   let form = document.getElementById("create-task-form");
       form.addEventListener("submit", (e) => {
        e.preventDefault();
        createTask(description.value);
        e.target.reset();
        

        
       });


});


