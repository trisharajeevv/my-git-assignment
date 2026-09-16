// script.js - To-Do List logic

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("taskList");
  console.log("To-Do app loaded");

  function deleteTask(taskItem) {
    taskItem.remove();
  }

  taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      deleteTask(e.target.parentElement);
    }
  });
});
