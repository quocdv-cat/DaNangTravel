document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tất cả các phần tử cần thiết
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    
    let currentIndex = 0;
    let slideInterval;

    // Nếu không có slide nào thì dừng luôn để tránh báo lỗi
    if (slides.length === 0) return;

    // 2. Hàm hiển thị slide theo vị trí (index)
    const showSlide = (index) => {
        // Xóa class 'active' ở tất cả các slide (làm chúng mờ đi)
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Thêm class 'active' vào slide mục tiêu (làm nó hiện lên)
        slides[index].classList.add('active');
    };

    // 3. Hàm chuyển sang slide tiếp theo
    const nextSlide = () => {
        // Công thức (hiện_tại + 1) chia lấy dư cho tổng số slide giúp nó quay vòng về 0
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    // 4. Hàm lùi về slide trước đó
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // 5. Gắn sự kiện click cho nút bấm (nếu các nút này tồn tại trong HTML)
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval(); // Tránh việc vừa click xong thì hàm tự động chạy đè lên
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }

    // 6. Cài đặt tự động chạy (Auto Play) mỗi 5 giây
    const startInterval = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };

    const resetInterval = () => {
        clearInterval(slideInterval); // Hủy bộ đếm cũ
        startInterval();              // Chạy lại bộ đếm mới
    };

    // Kích hoạt auto play khi trang vừa load xong
    startInterval();
});