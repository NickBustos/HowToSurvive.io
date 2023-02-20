// Abrir el menu navbar mobile
document.addEventListener("DOMContentLoaded", function() {
    let toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", function() {
      let collapse = document.querySelector(".navbar-collapse");
        if (collapse.classList.contains("show")) {
            collapse.classList.remove("show");
        } else {
            collapse.classList.add("show");
        }
    });
});