const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1: mark the document as enhanced, reveal the button, and initialize state.
document.documentElement.classList.add("js");
button.hidden = false;
button.setAttribute("aria-expanded", "false");

// TODO 2: create one function that synchronizes aria-expanded and visible state.
function setMenuState(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.hidden = !isOpen;
}

setMenuState(false);

// TODO 3: toggle that function when the native button is activated.
button.addEventListener("click", function () {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// TODO 4: when Escape is pressed while open, close and return focus to the button.
document.addEventListener("keydown", function (event) {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        setMenuState(false);
        button.focus();
    }
});
