class TodoList {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.storeList = this.selector.querySelector("#store-list");
    this.inputVal = this.selector.querySelector("input");

    this.selector.addEventListener("click", (event) => this.createList(event));
  }

  createList(event) {
    if (event.target.id === "btn") {
      if (this.inputVal.value.trim() !== "") {
        this.createSomeElement(this.inputVal.value);
      } else {
        alert("please fill the input");
      }
    } else if (event.target.id === "deleteBtn") {
      this.deleteListFunctionality(event.target);
    }
  }

  createSomeElement(val) {
    const parentDiv = document.createElement("div");
    const taskDiv = document.createElement("div");
    const deleteButton = document.createElement("button");

    taskDiv.innerText = val;
    deleteButton.innerText = "Delete Button";
    deleteButton.id = "deleteBtn";
    parentDiv.append(taskDiv, deleteButton);

    parentDiv.classList.add("flex", "w-full");
    taskDiv.classList.add("p-2", "w-[60%]");
    deleteButton.classList.add("p-2", "bg-black", "text-white");

    this.storeList.append(parentDiv);
    this.inputVal.value = "";
  }

  deleteListFunctionality(element) {
    element.parentElement.remove();
  }
}
const todoList = new TodoList("#container");