document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    // Dữ liệu slider (có thể thay bằng ảnh thật)
    const slidesData = [
        { url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1920&q=80' },
        { url: 'https://images.unsplash.com/photo-1555921015-5532091f6026?auto=format&fit=crop&w=1920&q=80' },
        { url: 'https://images.unsplash.com/photo-1596395819057-cbcf85b24f57?auto=format&fit=crop&w=1920&q=80' }
    ];

    // Khởi tạo các slide phụ (slide đầu tiên đã có sẵn trong HTML)
    for (let i = 1; i < slidesData.length; i++) {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide';
        slideDiv.style.backgroundImage = `url('${slidesData[i].url}')`;
        // Có thể clone nội dung hero-content từ slide đầu tiên nếu muốn text giống nhau
        sliderContainer.appendChild(slideDiv);
    }

    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // Nút điều khiển
    document.getElementById('next-slide').addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    document.getElementById('prev-slide').addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Tự động chạy
    const startInterval = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };

    const resetInterval = () => {
        clearInterval(slideInterval);
        startInterval();
    };

    startInterval();
});