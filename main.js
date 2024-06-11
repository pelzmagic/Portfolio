const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_Toggle");
const navClose = document.getElementById("nav_close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    const navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header")
                        : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

const contactForm = document.getElementById('contact_form');
const contactMessage = document.getElementById('contact_message');

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_51pill8','template_q1ri0bd','#contact_form','bFdVxFAqe6mrSSo2U')
            .then(() => {
                contactMessage.textContent = "Message sent successfully"

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)

                contactForm.reset();
            })
}
contactForm.addEventListener('submit', sendEmail);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);