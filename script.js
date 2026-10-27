
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Abdul Hadi's Portfolio!");

    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Opening project on GitHub...");
        });
    });
});
