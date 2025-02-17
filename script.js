const inputBox = document.getElementById("input-box")
const listcont = document.getElementById("list-container")

function addtask(){
    if(inputBox.value === ''){
        alert("You must write Something!")
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem("data", listcont.innerHTML)
}


function showTask(){
    listcont.innerHTML = localStorage.getItem("data")
}

showTask()








