const createBtn = document.getElementById("createTask");
const addTaskInput = document.getElementById("addTask");
const toDo = document.getElementById("to-do");
const doing = document.getElementById("doing");
const done = document.getElementById("done");
const myMain = document.querySelector("main");
const body = document.querySelector("body")

//  MY ARRAY TO DISPLAY IN ANY CONTAINER THAT IS MADE


let boilerplate = ["<button>Finish Editting</button>", "<h6>Move to To-Do</h6>", "<h3>Move to Doing</h3>", "<h4>Move to Done</h4>", "<h2>Mark as Done</h2>", "<h5>Delete Task</h5>"]

// "<h5>Edit task</h5>",
//FUNCTION USED TO CREATE A TASK CARD AND ADD IT TO THE TODO DIV

createBtn.addEventListener("click", () => {
    if (addTaskInput.value === "") {
        return window.alert("Cannot create an empty card.")
    }
    let mySectionCard = document.createElement("section");
    let cardTitle = document.createElement("article");
    let editTaskSpan = document.createElement("input");
    editTaskSpan.placeholder = "Click To Edit Task";
    cardTitle.innerHTML = addTaskInput.value + "<br><br><br>";
    cardTitle.appendChild(editTaskSpan);
    addTaskInput.value = "";
    mySectionCard.appendChild(cardTitle);
    toDo.appendChild(mySectionCard);
    mySectionCard.innerHTML += boilerplate.join("");
    savingToDoData()
    savingDoingData()
    savingDoneData()
});

// VIEW FULL CARD

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "ARTICLE") {
        action.target.parentElement.classList.toggle("viewCard");
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// EDITTING A CARD

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "INPUT") {
        let editText = action.target.parentElement;
        action.target.value = editText.innerText;
        // editText.innerText = action.target.value;
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

myMain.addEventListener("change", (action) => {
    if (action.target.tagName === "INPUT") {
        let editText = action.target.parentElement;
        editText.innerHTML = action.target.value + "<br><br></br>" + "<input placeholder='Click To Edit Task'>";
        action.target.value = "";
        savingData()
        savingDoingData()
        savingDoneData()
    }
})

// MOVING A CARD TO TODO

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "H6") {
        let content = action.target.parentElement.innerHTML;
        let mySectionCard = document.createElement("section");
        console.log(action.target)
        mySectionCard.innerHTML = content;
        toDo.appendChild(mySectionCard);
        action.target.parentElement.remove();
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// MOVING A CARD TO DOING

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "H3") {
        let content = action.target.parentElement.innerHTML;
        let mySectionCard = document.createElement("section");
        // action.target.remove();
        mySectionCard.innerHTML = content;
        doing.appendChild(mySectionCard);
        action.target.parentElement.remove();
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// MOVING A CARD TO DONE

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "H4") {
        let content = action.target.parentElement.innerHTML;
        let mySectionCard = document.createElement("section");
        action.target.style.innerHTML = "<h6>Move to To-Do</h6>";
        mySectionCard.innerHTML = content;
        done.appendChild(mySectionCard);
        action.target.parentElement.remove();
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// MARKING A TASKAS DONE AND UNDONE

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "H2") {
        action.target.parentElement.classList.toggle("checked");
        action.target.parentElement.classList.toggle("viewCard");
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// DELETE A TASK

myMain.addEventListener("click", (action) => {
    if (action.target.tagName === "H5") {
        action.target.parentElement.remove();
        savingToDoData()
        savingDoingData()
        savingDoneData()
    }
})

// STORAGE THROUGH LOCAL STORAGE


function savingToDoData() {
    localStorage.setItem("saveToDo", toDo.innerHTML);
}

function gettingToDoData() {
    toDo.innerHTML = localStorage.getItem("saveToDo");
}

gettingToDoData()




function savingDoingData() {
    localStorage.setItem("saveDoing", doing.innerHTML);
}

function gettingDoingData() {
    doing.innerHTML = localStorage.getItem("saveDoing");
}

gettingDoingData()




function savingDoneData() {
    localStorage.setItem("saveDone", done.innerHTML);
}

function gettingDoneData() {
    done.innerHTML = localStorage.getItem("saveDone");
}

gettingDoneData()





// function saveData(){
//     localStorage.setItem("myData", listContainer.innerHTML);
// }

// function showSavedTasks(){
//     listContainer.innerHTML = localStorage.getItem("myData");
// }
// showSavedTasks();


// CHANGE MARK AS DONE FROM TOGGLE TO ADD AND REMOVE
// USE AN IF STATEMENT TO MAKE THE MARK AS DONE sTAY WhEN YOU MOVE A CARD
// WORK ON RESPONSIVENESS
// THEN MAKE THE ACTUAL TRELLO DESIGN CAUSE WHAT YOU CURRENTL HAVE IS PURE SHIT!!!!!!!!!
// USE THE LIST CONTAINER AND ALL TO EDIT UR TRELLO CARD LIST
// YOU NEED TO BECOME THE BETTER MY GEE ... GOAL , GET TO OBIS LEVEL SO ONE MONTH OF JS SHOULD BE ENOUGH TO BUILD TRELLO
