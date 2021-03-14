function expander(event) {
    if (event.target.classList.contains("title")) {
        const descriptionDiv = event.target.parentNode.childNodes[3];
        const carat = event.target.childNodes[1]
        if (descriptionDiv.classList.contains("closed")) {
            descriptionDiv.classList.remove("closed")
            carat.innerHTML = "▴"
        } else {
            descriptionDiv.classList.add("closed")
            carat.innerHTML = "▾"
        }

    }

}
console.log("Photo of students doing art by Pragyan Bezbaruah, from pexels.com")
document.addEventListener("click", expander);