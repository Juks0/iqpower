document.addEventListener("DOMContentLoaded", () => {
    // =======================
    // CARD SLIDER (TOP SECTION)
    // =======================
    const cards = document.querySelectorAll(".card");
    const desc = document.querySelectorAll(".desc");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    const updateSections = () => {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add("fade-in");
                card.classList.remove("fade-out");
                desc[index].classList.add("fade-in");
                desc[index].classList.remove("fade-out");
                dots[index].classList.add("active");
            } else {
                card.classList.remove("fade-in");
                card.classList.add("fade-out");
                desc[index].classList.remove("fade-in");
                desc[index].classList.add("fade-out");
                dots[index].classList.remove("active");
            }
        });
    };

    const btnLeftTop = document.getElementById("arrow-left");
    const btnRightTop = document.getElementById("arrow-right");

    if (btnLeftTop && btnRightTop) {
        btnLeftTop.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
            updateSections();
        });

        btnRightTop.addEventListener("click", () => {
            currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
            updateSections();
        });
    } else {
        console.error("Error: Top section arrows not found in the DOM.");
    }

    updateSections();

    // =======================
    // BUTTON - LABEL CHANGE
    // =======================
    const button = document.querySelector('.c-btn');
    const label = button?.querySelector('.c-btn__label');

    if (button && label) {
        button.addEventListener('click', () => {
            setTimeout(() => {
                label.textContent = 'Downloaded';
            }, 100);
        });
    } else {
        console.error("Error: Download button or label not found.");
    }

        // =======================
        // GALLERY SLIDER (CAROUSEL)
        // =======================
        const gallery = document.querySelector('.gallery');
        const items = document.querySelectorAll('.gallery-item');
        const btnLeft = document.querySelector('.btn-left');
        const btnRight = document.querySelector('.btn-right');

        let currentIndex2 = 0;
        let itemWidth; // Defined globally to update dynamically

        // Function to calculate item width after DOM content loads
        const calculateItemWidth = () => {
            if (items.length > 0) {
                itemWidth = items[0].getBoundingClientRect().width + 20; // More accurate width calculation
                console.log(`Updated Item width: ${itemWidth}px`);
            } else {
                console.error("Error: No gallery items found.");
            }
        };

        // Function to update the gallery position based on the current index
        const updateGalleryPosition = () => {
            gallery.style.transition = 'transform 0.5s ease';  // Smooth transition
            gallery.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
        };

        // Handle Right Button Click (Next)
        if (btnRight) {
            btnRight.addEventListener('click', () => {
                // Go to next item, if it's the last, loop back to the first
                currentIndex2 = (currentIndex2 + 1) % items.length; // Looping behavior
                updateGalleryPosition();
                console.log(`Moved Right - Current Index: ${currentIndex2}`);
            });
        } else {
            console.error("Error: Gallery right button not found.");
        }

        // Handle Left Button Click (Previous)
        if (btnLeft) {
            btnLeft.addEventListener('click', () => {
                // Go to previous item, if it's the first, loop back to the last
                currentIndex2 = (currentIndex2 - 1 + items.length) % items.length; // Looping behavior
                updateGalleryPosition();
                console.log(`Moved Left - Current Index: ${currentIndex2}`);
            });
        } else {
            console.error("Error: Gallery left button not found.");
        }

        // Recalculate item width only after the page loads
        window.addEventListener('load', () => {
            calculateItemWidth();
            updateGalleryPosition();  // Ensures correct position on load
        });

        // Recalculate on window resize
        window.addEventListener('resize', () => {
            calculateItemWidth();
            updateGalleryPosition();
        });

});
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const leftArrow = document.getElementById('arrow-left2');
    const rightArrow = document.getElementById('arrow-right2');

    let currentIndex = 0;

    // Update the gallery position by sliding it to the correct index
    function updateGallery() {
        const itemWidth = galleryItems[0].offsetWidth + 20; // item width + gap
        gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Show or hide the arrows based on the current index
    function updateArrows() {
        leftArrow.style.display = currentIndex === 0 ? 'none' : 'flex';
        rightArrow.style.display = currentIndex === galleryItems.length - 1 ? 'none' : 'flex';
    }

    // Event listener for left arrow
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
            updateArrows();
        }
    });

    // Event listener for right arrow
    rightArrow.addEventListener('click', () => {
        if (currentIndex < galleryItems.length - 1) {
            currentIndex++;
            updateGallery();
            updateArrows();
        }
    });

    // Initialize
    updateArrows();
});