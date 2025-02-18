
        // let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");
        const slider = document.querySelector(".slider");
        const totalSlides = slides.length;

        function moveSlide(step) {
            currentIndex += step;

            // Loop to first slide if at the end
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }

            updateSlide();
        }

        function updateSlide() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function autoPlay() {
            moveSlide(1);
        }

        let autoSlide = setInterval(autoPlay, 2000); // Change every 3 seconds

        // Pause autoplay on hover
        document.querySelector(".slider-container").addEventListener("mouseenter", () => {
            clearInterval(autoSlide);
        });

        document.querySelector(".slider-container").addEventListener("mouseleave", () => {
            autoSlide = setInterval(autoPlay, 3000);
        });
        
        

        let currentIndex = 0; // Track the current index of the visible item
        const items = document.getElementById('carouselItems');
        const totalItems = items.children.length; // Total number of items
        const itemWidth = 180;
        function scrollCarousel(direction) {
            // Calculate the new index
            currentIndex += direction;
        
            // Prevent scrolling beyond the first or last item
            if (currentIndex < 0) {
                currentIndex = 0; // Stay at the first item
            } else if (currentIndex > totalItems - 1) {
                currentIndex = totalItems - 1; // Stay at the last item
            }
        
            // Calculate the new transform value
            const offset = -currentIndex * itemWidth; // Move left by the width of the items
            items.style.transform = `translateX(${offset}px)`; // Apply the transform
        }
  