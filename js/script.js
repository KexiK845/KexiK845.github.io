document.querySelectorAll("#lose").forEach(element => {
    element.addEventListener("click", () => {
        alert("Неправильный ответ");
        element.classList.add("lose_color")
    });
});

document.querySelectorAll("#win").forEach(element => {
    element.addEventListener("click", () => {
        alert("Правильный ответ!")
    });
});