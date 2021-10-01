let inputEl = document.getElementById("input-el");
let saveBtn = document.getElementById("save-btn");
let ulEl = document.getElementById("ul-el");
let ulEl2 = document.getElementById("prev-lists");
let myList = [];

saveBtn.addEventListener("click", function () {
    myList.push(inputEl.value);
    inputEl.value = "";
    saveClick();
})

function saveClick() {
    let Lists = ""
    for (i = 0; i < myList.length; i++) {
        Lists += `
            <li>${myList[i]}</li>
        `
    }
    ulEl.innerHTML = Lists;
    localStorage.setItem("to-do list" , Lists);
}

function previousBtn() {
    ulEl2.innerHTML = localStorage.getItem("to-do list");
    inputEl.value = "";
    ulEl.innerHTML = "";
}

function clearLists() {
        window.alert("Your Saved To-Do List will be deleted permanently!");
        ulEl.innerHTML = "";
        ulEl2.innerHTML = "";
        localStorage.clear();
    }
