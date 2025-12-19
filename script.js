document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const navToggle = document.querySelector('.nav-toggle');
            const mainNav = document.querySelector('.main-nav');
            const navLinks = document.querySelectorAll('.main-nav a');

            // 4. Hamburger Menu Logic 
            navToggle.addEventListener('click', () => {
                header.classList.toggle('active');
                mainNav.classList.toggle('active');
            });

            // Close nav when a link is clicked (for mobile)
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Cek apakah mode mobile aktif (nav terbuka)
                    if (mainNav.classList.contains('active')) {
                        header.classList.remove('active');
                        mainNav.classList.remove('active');
                    }
                });
            });

            // 1. Smooth Scrolling untuk Navigasi
            navLinks.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault(); 

                    const targetId = this.getAttribute('href').substring(1); 
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - document.querySelector('header').offsetHeight, 
                            behavior: 'smooth' 
                        });
                    }
                });
            });


            // Carousel/Slider Projects
            const track = document.querySelector('.project-carousel-track');
            const slides = Array.from(track.children);
            const dotsContainer = document.querySelector('.carousel-dots');
            const prevButton = document.querySelector('.prev-btn');
            const nextButton = document.querySelector('.next-btn');
            const swipeContainer = document.getElementById('swipe-container');

            let currentIndex = 0;
            let startX = 0;
            let isDragging = false;

            // Buat dots
            slides.forEach((slide, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            });

            const dots = Array.from(dotsContainer.children);

            function updateCarousel() {
                const slideWidth = slides[0].getBoundingClientRect().width;
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                
                // Update dots
                dots.forEach(dot => dot.classList.remove('active'));
                dots[currentIndex].classList.add('active');
                
                // Update buttons
                prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
                nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
            }

            // Button navigation
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });

            nextButton.addEventListener('click', () => {
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });

            // Touch/Swipe support untuk mobile
            swipeContainer.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            });

            swipeContainer.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
            });

            swipeContainer.addEventListener('touchend', (e) => {
                if (!isDragging) return;
                isDragging = false;
                
                const endX = e.changedTouches[0].clientX;
                const diff = startX - endX;
                
                // Swipe threshold (minimal 50px)
                if (Math.abs(diff) > 50) {
                    if (diff > 0 && currentIndex < slides.length - 1) {
                        // Swipe left (next)
                        currentIndex++;
                    } else if (diff < 0 && currentIndex > 0) {
                        // Swipe right (prev)
                        currentIndex--;
                    }
                    updateCarousel();
                }
            });

            // Scroll event untuk mobile (alternative)
            swipeContainer.addEventListener('scroll', () => {
                const slideWidth = slides[0].getBoundingClientRect().width;
                const newIndex = Math.round(swipeContainer.scrollLeft / slideWidth);
                
                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    // Update dots saja, jangan ubah scroll position
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[currentIndex].classList.add('active');
                }
            });

            // Window resize handler
            window.addEventListener('resize', () => {
                updateCarousel();
            });


            // 2. Efek Scroll untuk Header
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // 3. Efek "Typewriter" untuk Text (pada h2.name)
            const heroTitle = document.querySelector('.hero-content .name');
            
            // Pastikan heroTitle ada sebelum menjalankan
            if (heroTitle) {
                const textToType = heroTitle.textContent; 
                heroTitle.textContent = ''; // Kosongkan teks

                let charIndex = 0;
                function typeWriter() {
                    if (charIndex < textToType.length) {
                        heroTitle.textContent += textToType.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeWriter, 100); // Kecepatan ketik (milidetik)
                    }
                }

                // Panggil fungsi typewriter saat halaman dimuat
                window.onload = function() {
                    typeWriter();
                };
            }
        });

        