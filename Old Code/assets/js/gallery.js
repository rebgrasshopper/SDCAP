function modal(event) {
    if (event.target.tagName == "IMG") {
        openModal()
        console.log(event.target.src)
        const modal = document.getElementsByClassName("modal-content")[0];
        let newImg = document.createElement("img");
        newImg.id = "modalImg";
        newImg.src = event.target.src
        let modalText = document.getElementById("modal-text");
        modalText.innerText = event.target.alt;
        modal.appendChild(newImg)
    }
}

document.addEventListener("click", modal)

// When the user clicks on the button, open the modal
function openModal() {
    modal.style.display = "block";
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    let modalText = document.getElementById("modal-text");
    modalText.innerText = ''
    document.getElementById("modalImg").remove()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        let modalText = document.getElementById("modal-text");
        modalText.innerText = ''
        document.getElementById("modalImg").remove()
    }
}