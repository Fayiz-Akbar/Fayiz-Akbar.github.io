// script.js



// 1. Smooth Scrolling untuk Navigasi
// Ini akan membuat scroll lebih halus saat mengklik tautan navigasi.
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default (loncat langsung)

        const targetId = this.getAttribute('href').substring(1); // Ambil ID target (misal: "home", "about")
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Sesuaikan dengan tinggi header jika header fixed
                behavior: 'smooth' // Membuat scroll menjadi halus
            });
        }
    });
});


// 6. Project Carousel Functionality (Multi-item per slide)
const projectCarouselTrack = document.querySelector('.project-carousel-track');
const projectSlides = document.querySelectorAll('.project-slide'); // Setiap slide kini berisi grid
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselDotsContainer = document.querySelector('.carousel-dots');

if (projectCarouselTrack && projectSlides.length > 0 && prevBtn && nextBtn && carouselDotsContainer) {
    let currentIndex = 0;
    
    // Fungsi untuk mendapatkan lebar satu slide penuh (lebar dari project-carousel-container)
    function getSlideWidth() {
        // Kita menggunakan offsetWidth dari parent container untuk mendapatkan lebar tampilan saat ini
        // Karena project-slide diatur min-width: 100%, lebar project-slide akan sama dengan parentnya.
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
        carouselDotsContainer.innerHTML = ''; // Bersihkan dots yang ada
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

    // Navigasi Previous
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = projectSlides.length - 1; // Kembali ke slide terakhir
        }
        updateCarousel();
    });

    // Navigasi Next
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= projectSlides.length) {
            currentIndex = 0; // Kembali ke slide pertama
        }
        updateCarousel();
    });

    // Handle Window Resize (penting agar carousel responsif)
    window.addEventListener('resize', () => {
        // Panggil updateCarousel untuk menghitung ulang lebar dan mengatur posisi
        updateCarousel();
    });


    // Inisialisasi carousel saat dimuat
    createDots();
    updateCarousel(); // Panggil pertama kali untuk menampilkan slide awal dan dot aktif
}

// 2. Efek Scroll untuk Header (Contoh: Mengubah Background Header)
// Ini akan mengubah latar belakang header saat discroll ke bawah.
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
        header.style.backgroundColor = '#222'; // Warna lebih gelap
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)'; // Tambahkan bayangan
    } else {
        header.style.backgroundColor = '#333'; // Kembali ke warna awal
        header.style.boxShadow = 'none'; // Hapus bayangan
    }
});

// 3. Efek "Typewriter" untuk Text (opsional, lebih kompleks)
// Ini membuat teks muncul seolah-olah diketik.
// Anda bisa menerapkannya pada elemen <h1> di bagian home.

// Contoh implementasi sederhana:
const heroTitle = document.querySelector('#home .hero h1');
const textToType = heroTitle.textContent; // Ambil teks asli
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


