const academicWorks = {
    activities: [
        { title: "Activity 1 - Comprehensive Report", file: "files/ENRIQUEZ, ADRIAN A. - Module-Activity-1.pdf" },
        { title: "Activity 2 - Interview Guide", file: "files/ENRIQUEZ, ADRIAN A. - Module-Activity-2.pdf" },
    ],
    quizzes: [
        { title: "Quiz 1 - Emerging Technologies", file: "pngs/Quiz1.png" },
        { title: "Quiz 2 - Requirements Analysis & Unified Modeling Language", file: "pngs/Quiz2.png" },
        { title: "Quiz 3 - The SOLID Principles", file: "pngs/Quiz3.png" },
        { title: "Long Quiz - Emerging Technologies, Requirements Analysis, SOLID Principles & Design Patterns", file: "pngs/LongQuiz.png" },
    ],
    examinations: [
        { title: "Midterms Examination", file: "pngs/Midterms.jpg" },
    ],
    projects: [
        
    ]
};

const EMPTY_MESSAGE = "Nothing uploaded here yet. Check back soon!";
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "gif", "webp", "svg"];

function isImageFile(fileName) {
    const ext = fileName.split(".").pop().split("?")[0].toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
}

function renderDirectory() {
    document.querySelectorAll(".directory-box").forEach((box) => {
        const category = box.dataset.category;        // activities, quizzes, ...
        const listEl = box.querySelector(".directory-list");
        const items = academicWorks[category] || [];

        listEl.innerHTML = ""; // clear before rebuilding

        if (items.length === 0) {
            // Section has no files yet -> show placeholder message
            const msg = document.createElement("p");
            msg.className = "empty-message";
            msg.textContent = EMPTY_MESSAGE;
            listEl.appendChild(msg);
        } else {
            // Build one clickable row per PDF
            items.forEach((item) => {
                const link = document.createElement("a");
                link.className = "pdf-item";
                link.href = item.file;
                link.target = "_blank"; // opens the PDF in a new tab
                link.rel = "noopener noreferrer";
                link.innerHTML =
                    '<i class="bx bxs-file-pdf"></i><span></span>';
                link.querySelector("span").textContent = item.title; // keep text safe
                listEl.appendChild(link);
            });
        }
    });
}

renderDirectory();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
