//Function to add a new task
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
  
    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
      // Check for duplicate task
      if (isDuplicateTask(taskText)) {
        alert("Task already exists. Please enter a different task.");
        return;
      }
  
      var taskItem = document.createElement("li");
      taskItem.className = "task-item";
  
      var taskTextInput = document.createElement("input");
      taskTextInput.type = "text";
      taskTextInput.value = taskText;
      taskTextInput.readOnly = true;
  
      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function() {
        editTask(taskItem);
      });
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        deleteTask(taskItem);
      });
  
      taskItem.appendChild(taskTextInput);
      taskItem.appendChild(editButton);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
    }
  }
  
  // Function to check if a task already exists
  function isDuplicateTask(taskText) {
    var taskItems = document.getElementsByClassName("task-item");
    for (var i = 0; i < taskItems.length; i++) {
      var taskTextInput = taskItems[i].querySelector("input[type='text']");
      if (taskTextInput.value.toLowerCase() === taskText.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  
  // Function to edit a task
  function editTask(taskItem) {
    var taskTextInput = taskItem.querySelector("input[type='text']");
    taskTextInput.readOnly = false;
    taskTextInput.focus();
  
    var editButton = taskItem.querySelector("button");
    editButton.textContent = "Save";
  
  // Add event listener to the task input to change the button back to "Edit" when it loses focus
    taskTextInput.addEventListener("blur", function() {
      editButton.textContent = "Edit";
      taskTextInput.readOnly = true;
    });
  }
  
  // Function to delete a task
  function deleteTask(taskItem) {
    var confirmDelete = confirm("Are you sure you want to delete the task?");
    if (confirmDelete) {
      taskItem.remove();
    }
  }
  
  // Event listener for the add button
  var addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addTask);
  
 