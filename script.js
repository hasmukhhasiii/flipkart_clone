
        let currentIndex = 0;
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

        let autoSlide = setInterval(autoPlay, 3000); // Change every 3 seconds

        // Pause autoplay on hover
        document.querySelector(".slider-container").addEventListener("mouseenter", () => {
            clearInterval(autoSlide);
        });

        document.querySelector(".slider-container").addEventListener("mouseleave", () => {
            autoSlide = setInterval(autoPlay, 3000);
        });
        
        // function scrollProducts(scrollValue) {
        //     document.getElementById("productList").scrollLeft += scrollValue;
        // }

        let scrollAmount = 0;
        function scrollCarousel(direction) {
            const container = document.getElementById('carouselItems');
            const scrollStep = 200;
            scrollAmount += direction * scrollStep;
            container.style.transform = `translateX(${-scrollAmount}px)`;
        }
  