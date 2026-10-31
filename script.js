```javascript
// ================================================
// NEXORA TECHNOLOGIES
// COMPLETE WEBSITE JAVASCRIPT
// ================================================


// ================================================
// 1. MOBILE NAVIGATION MENU
// ================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ================================================
// 2. SCROLL REVEAL ANIMATIONS
// ================================================

const revealElements = document.querySelectorAll(
    ".reveal, .project-card, .about-content, .vision-content"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


// ================================================
// 3. NAVIGATION HIGHLIGHT ON SCROLL
// ================================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
    ".nav-links a[href^='#']"
);

function updateActiveNavigation() {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation);
updateActiveNavigation();


// ================================================
// 4. AUTOMATIC FOOTER YEAR
// ================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================================================
// 5. NEXORA TECHNOLOGIES CONTACT FORM
// SEND MESSAGES THROUGH WHATSAPP
// ================================================

// Your WhatsApp number.
// Nigerian number: 08088507793
// International format: 2348088507793

const WHATSAPP_NUMBER = "2348088507793";

const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get the visitor's form information.
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const interestField = document.getElementById("interest");
        const messageField = document.getElementById("message");

        // Check that all required fields exist.
        if (
            !nameField ||
            !emailField ||
            !interestField ||
            !messageField
        ) {
            if (formNotice) {
                formNotice.textContent =
                    "There is a problem with the contact form. Please check the form fields.";
            }

            return;
        }

        // Read the visitor's information.
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const interest = interestField.value;
        const message = messageField.value.trim();

        // Check that all fields have been completed.
        if (!name || !email || !interest || !message) {

            if (formNotice) {
                formNotice.textContent =
                    "Please complete all fields before sending your message.";
            }

            return;
        }

        // Validate the email address.
        if (!emailField.checkValidity()) {

            if (formNotice) {
                formNotice.textContent =
                    "Please enter a valid email address.";
            }

            emailField.focus();
            return;
        }

        // Prepare the message for WhatsApp.
        const whatsappMessage =
            "🚀 NEW WEBSITE ENQUIRY\n" +
            "NEXORA TECHNOLOGIES\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Interested in: " + interest + "\n\n" +
            "Message:\n" + message + "\n\n" +
            "Sent through the NEXORA TECHNOLOGIES website.";

        // Build the WhatsApp chat link.
        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        // Display a status message.
        if (formNotice) {
            formNotice.textContent =
                "Opening WhatsApp. Please press SEND to deliver your enquiry.";
        }

        // Open WhatsApp in a new tab.
        const whatsappWindow = window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

        // Handle cases where the browser blocks the new tab.
        if (!whatsappWindow) {

            if (formNotice) {
                formNotice.textContent =
                    "WhatsApp could not open automatically. Use the link below to continue.";
            }

            let whatsappLink = document.getElementById("whatsappFallback");

            if (!whatsappLink) {
                whatsappLink = document.createElement("a");
                whatsappLink.id = "whatsappFallback";
                whatsappLink.textContent = "Open WhatsApp to send your message";
                whatsappLink.target = "_blank";
                whatsappLink.rel = "noopener noreferrer";
                whatsappLink.style.display = "inline-block";
                whatsappLink.style.marginTop = "12px";

                if (formNotice) {
                    formNotice.insertAdjacentElement(
                        "afterend",
                        whatsappLink
                    );
                }
            }

            whatsappLink.href = whatsappURL;
        }
    });
}


// ================================================
// 6. NEXORA TECHNOLOGIES CONSOLE MESSAGE
// ================================================

console.log(
    "%cNEXORA TECHNOLOGIES",
    "color: #00eaff; font-size: 22px; font-weight: bold;"
);

console.log(
    "%cBuilding the Future. Beyond Imagination.",
    "color: #8b9bb4; font-size: 13px;"
);
```