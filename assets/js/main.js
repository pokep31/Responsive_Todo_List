// Getting all required elements
const inputField = document.querySelector(".input-field textarea"),
      todoLists = document.querySelector(".todoLists"),
      pendingNum = document.querySelector(".pending-num"),
      clearButton = document.querySelector(".clear-button");

// add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //trim function removes spaces of front and back of the inputed value
//if enter button is clicked and inputed value length is greated than 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list">
        <input type="checkbox">
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash"></i>
      </li>`;
      todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the todolist div.
  }
})