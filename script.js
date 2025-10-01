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


            // 6. Project Carousel Functionality (Multi-item per slide)
            const projectCarouselTrack = document.querySelector('.project-carousel-track');
            const projectSlides = document.querySelectorAll('.project-slide'); 
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const carouselDotsContainer = document.querySelector('.carousel-dots');

            if (projectCarouselTrack && projectSlides.length > 0 && prevBtn && nextBtn && carouselDotsContainer) {
                let currentIndex = 0;
                
                // Fungsi untuk mendapatkan lebar satu slide penuh
                function getSlideWidth() {
                    return projectCarouselTrack.parentElement.offsetWidth; 
                }

                // Fungsi untuk memperbarui posisi carousel
                function updateCarousel() {
                    const currentSlideWidth = getSlideWidth();
                    projectCarouselTrack.style.transform = `translateX(${-currentIndex * currentSlideWidth}px)`;

                    // Update active dot
                    document.querySelectorAll('.dot').forEach((dot, index) => {
                        if (index === currentIndex) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                }

                // Fungsi untuk membuat dots navigasi
                function createDots() {
                    carouselDotsContainer.innerHTML = ''; 
                    projectSlides.forEach((_, index) => {
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        if (index === currentIndex) {
                            dot.classList.add('active');
                        }
                        dot.addEventListener('click', () => {
                            currentIndex = index;
                            updateCarousel();
                        });
                        carouselDotsContainer.appendChild(dot);
                    });
                }

                // Navigasi Previous (Looping)
                prevBtn.addEventListener('click', () => {
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = projectSlides.length - 1; // Kembali ke slide terakhir
                    }
                    updateCarousel();
                });

                // Navigasi Next (Looping)
                nextBtn.addEventListener('click', () => {
                    currentIndex++;
                    if (currentIndex >= projectSlides.length) {
                        currentIndex = 0; // Kembali ke slide pertama
                    }
                    updateCarousel();
                });

                // Handle Window Resize (penting agar carousel responsif)
                window.addEventListener('resize', () => {
                    updateCarousel();
                });


                // Inisialisasi carousel saat dimuat
                createDots();
                updateCarousel(); 
            }
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
        