const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
})

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });

});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

const dishes = [
    {
        name: "Truffle Mushroom Soup",
        category: "starter",
        description: "Creamy mushroom soup finished with fresh herbs and aromatic truffle oil.",
        price: 320
    },
    {
        name: "Garlic Butter Chicken",
        category: "main-course",
        description: "Tender chicken pieces tossed in garlic butter, herbs and mild spices.",
        price: 580
    },
    {
        name: "Royal Chicken Biryani",
        category: "main-course",
        description: "Fragrant basmati rice layered with tender chicken and aromatic spices.",
        price: 450
    },
    {
        name: "Classic Margherita Pizza",
        category: "pizza",
        description: "San Marzano tomatoes, fresh mozzarella and basil.",
        price: 420
    },
    {
        name: "Chocolate Lava Cake",
        category: "dessert",
        description: "Warm chocolate cake with a rich molten chocolate center.",
        price: 280
    }
];

const filterButtons = document.querySelectorAll(".filter-btn");
const menuList = document.querySelector(".menu-list");


function renderDishes(dishesToRender) {

    let html = "";

    dishesToRender.forEach(function (dish) {

        html += `
            <div class="menu-item">
                <div class="menu-item-info">
                    <h3>${dish.name}</h3>
                    <p>${dish.description}</p>
                </div>

                <span class="menu-price">₹${dish.price}</span>
            </div>
        `;

    });

    menuList.innerHTML = html;
}


renderDishes(dishes);


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.category;
        localStorage.setItem("selectedCategory", selectedCategory);

        

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        

        button.classList.add("active");

        let filteredDishes;

        if (selectedCategory === "all") {
            filteredDishes = dishes;
        } else {
            filteredDishes = dishes.filter(function (dish) {
                return dish.category === selectedCategory;
            });
        }

        renderDishes(filteredDishes);

    });

});
const savedCategory = localStorage.getItem("selectedCategory");

console.log("Saved category:", savedCategory);

if (savedCategory) {

    const savedButton = document.querySelector(
        `.filter-btn[data-category="${savedCategory}"]`
    );

    if (savedButton) {
        savedButton.click();
    }

}

const reservationForm = document.querySelector(".reservation-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const dateInput = document.querySelector("#date");
const guestsInput = document.querySelector("#guests");
const messageInput = document.querySelector("#message");

const formMessage = document.querySelector(".form-message");


reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const date = dateInput.value;
    const guests = guestsInput.value;


    // Name validation
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }


    // Email validation
    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }


    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
        formMessage.textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }


    // Date validation
    if (date === "") {
        formMessage.textContent = "Please select a date.";
        return;
    }


    // Guests validation
    if (guests === "" || guests < 1 || guests > 20) {
        formMessage.textContent =
            "Guests must be between 1 and 20.";
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
}
const today = new Date().toISOString().split("T")[0];

if (date < today) {
    formMessage.textContent = "Please select a future date.";
    return;
}

    // Success
    formMessage.textContent =
        "Reservation request submitted successfully!";

    reservationForm.reset();

});
const dishModal = document.querySelector("#dishModal");
const modalClose = document.querySelector("#modalClose");

const dishCards = document.querySelectorAll(".dish-card");

dishCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const name = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        const price = card.querySelector(".dish-price").textContent;

        modalDishName.textContent = name;
        modalDishDescription.textContent = description;
        modalDishPrice.textContent = price;

        dishModal.classList.add("show");

    });

});

modalClose.addEventListener("click", function () {

    dishModal.classList.remove("show");

});

const modalDishName = document.querySelector("#modalDishName");
const modalDishDescription = document.querySelector("#modalDishDescription");
const modalDishPrice = document.querySelector("#modalDishPrice");

dishModal.addEventListener("click", function (event) {

    if (event.target === dishModal) {
        dishModal.style.display = "none";
    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        dishModal.style.display = "none";
    }

});
dishCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const name = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        const price = card.querySelector(".dish-price").textContent;

        modalDishName.textContent = name;
        modalDishDescription.textContent = description;
        modalDishPrice.textContent = price;

        dishModal.classList.add("show");

    });

});


modalClose.addEventListener("click", function () {

    dishModal.classList.remove("show");

});


dishModal.addEventListener("click", function (event) {

    if (event.target === dishModal) {
        dishModal.classList.remove("show");
    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        dishModal.classList.remove("show");
    }

});

const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {

    revealElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

});

