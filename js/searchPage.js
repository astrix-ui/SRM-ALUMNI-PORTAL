// navbar.js
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", (event) => {
    const isMenuOpen = mobileMenu.style.right === "0px";
    mobileMenu.style.right = isMenuOpen ? "-100%" : "0px";
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        mobileMenu.style.right = "-100%";
    }
});


// SEARCHING FUNCTIONS 

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const profileCards = document.querySelectorAll(".profile-card");
    const searchResults = document.querySelector(".search-results");
    const pagination = document.querySelector(".pagination-section");

    const errorMsg = document.querySelector(".error-msg");

    // Initially hide all profile cards, search results section, and pagination
    profileCards.forEach(card => {
        card.style.display = "none";
    });
    searchResults.style.display = "none";
    errorMsg.style.display = 'none';

    pagination.style.display = "none";

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        let visibleProfiles = 0;

        profileCards.forEach(card => {
            const name = card.querySelector(".profile-name h2").textContent.toLowerCase();
            if (name.includes(searchValue) && searchValue.length > 0) {
                card.style.display = "flex";
                visibleProfiles++;
            } else {
                

                card.style.display = "none";
            }
        });

        // Show or hide the search results section based on results
        searchResults.style.display = visibleProfiles > 0 ? "block" : "none";
        errorMsg.style.display = visibleProfiles > 0 ? "none" : "block";
        
        // Show or hide pagination based on number of visible profiles
        pagination.style.display = visibleProfiles >= 5 ? "flex" : "none";
    });
});


