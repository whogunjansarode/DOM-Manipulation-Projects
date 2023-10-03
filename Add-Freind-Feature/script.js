var istatus = document.querySelector("h5")

var addfrnd = document.querySelector("#add")

// var removefrnd = document.querySelector("#remove")

var check = 0

addfrnd.addEventListener("click", function(){
    if (check == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color= "green"
    addfrnd.innerHTML= "Remove Friend"
    check = 1
    } else {
        addfrnd.innerHTML = "Add Friend"
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        check = 0
    }
})

// removefrnd.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })