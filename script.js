const show = document.querySelector("#show");

const sidebar = document.querySelector(".sidebar");

show.addEventListener("click", function() {
    sidebar.classList.toggle("guy-show");
})