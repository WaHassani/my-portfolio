document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const modal = document.getElementById("tourModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = "flex";
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});


