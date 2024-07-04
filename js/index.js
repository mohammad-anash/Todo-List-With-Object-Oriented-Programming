function selectElement(selector) {
  return document.getElementById(selector);
}
const container = selectElement("container");
const storeList = selectElement("store-list");
const fragment = document.createDocumentFragment();
let callClass;

function makeList(element) {
  return document.createElement(element);
}

class CreateList {
  constructor(event) {
    this.event = event;
  }

  getInputText() {
    if (this.event.target.id === "btn") {
      if (this.event.target.previousElementSibling.value.length !== 0) {
        const inputText = this.event.target.previousElementSibling.value;
        const parentDiv = makeList("div");
        const list = makeList("div");
        const deleteBtn = makeList("div");

        list.innerText = inputText;
        deleteBtn.innerHTML = `<i class="ri-delete-bin-5-line"></i>`;
        deleteBtn.id = "deleteBtn";

        parentDiv.classList.add("flex", "w-full", "my-2");
        list.classList.add(
          "p-1",
          "border-2",
          "border-black",
          "rounded-sm",
          "capitalize",
          "text-black",
          "text-[13px]",
          "w-[70%]"
        );
        deleteBtn.classList.add(
          "w-[20%]",
          "bg-black",
          "text-[#9ACD32]",
          "flex",
          "justify-center",
          "items-center",
          "text-xs",
          "cursor-pointer"
        );

        parentDiv.append(list, deleteBtn);

        const fragment = document.createDocumentFragment();
        fragment.append(parentDiv);
        storeList.append(fragment);

        this.event.target.previousElementSibling.value = "";
      } else {
        alert("please fill input");
      }
    }
  }

  deleteList() {
    if (this.event.target.parentElement.id === "deleteBtn") {
      this.event.target.parentElement.parentElement.remove();
    }
  }
}

container.addEventListener("click", function (event) {
  callClass = new CreateList(event);
  callClass.getInputText();
  callClass.deleteList();
});
