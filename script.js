document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            var sections = document.querySelectorAll("main section");
            for (var j = 0; j < sections.length; j++) {
                sections[j].style.display = "none";
            }
            targetSection.style.display = "block";
        });
    }
});
