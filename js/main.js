document.addEventListener('DOMContentLoaded', () => {
    // 1. Tắt Loading Animation khi trang tải xong
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 300);
        }, 500); // Giả lập loading nhẹ
    }

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // 3. Header Sticky & Back to Top
    const header = document.querySelector('header');
            const backToTop = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                    header.style.padding = '0';
                } else {
                    header.style.boxShadow = 'none';
                }
                
                if (window.scrollY > 500) backToTop.classList.add('show');
                else backToTop.classList.remove('show');
            });

            backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

    // 4. Language Toggle & i18n
    const langToggle = document.getElementById('lang-toggle');

    if (langToggle) {
        // Set initial selected value
        langToggle.value = currentLang;

        langToggle.addEventListener('change', (e) => {
            const newLang = e.target.value;
            updateLanguage(newLang);
        });
    }

    // 6. Search Địa điểm Real-time
    const searchInput = document.getElementById('searchInput');
    const destCards = document.querySelectorAll('.destination-card');
    const noResultMsg = document.getElementById('no-result-msg');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            let hasVisible = false;

            destCards.forEach(card => {
                const name = card.getAttribute('data-name').toLowerCase();
                if (name.includes(keyword)) {
                    card.style.display = 'block';
                    hasVisible = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (!hasVisible && keyword !== '') {
                noResultMsg.classList.remove('hidden');
            } else {
                noResultMsg.classList.add('hidden');
            }
        });
    }

    // 7. Gallery Lightbox
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    let currentImgIndex = 0;
    const imagesArray = Array.from(galleryImgs);

    if (lightbox && galleryImgs.length > 0) {
        galleryImgs.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentImgIndex = index;
                showLightbox(img.src);
            });
        });

        const showLightbox = (src) => {
            lightbox.classList.remove('hidden');
            lightboxImg.src = src;
            document.body.style.overflow = 'hidden'; // Ngăn cuộn trang
        };

        const hideLightbox = () => {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };

        closeLightbox.addEventListener('click', hideLightbox);

        // Nút Next/Prev
        document.querySelector('.prev-lightbox').addEventListener('click', () => {
            currentImgIndex = (currentImgIndex === 0) ? imagesArray.length - 1 : currentImgIndex - 1;
            lightboxImg.src = imagesArray[currentImgIndex].src;
        });

        document.querySelector('.next-lightbox').addEventListener('click', () => {
            currentImgIndex = (currentImgIndex === imagesArray.length - 1) ? 0 : currentImgIndex + 1;
            lightboxImg.src = imagesArray[currentImgIndex].src;
        });

        // Bấm Esc để đóng
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && !lightbox.classList.contains('hidden')) {
                hideLightbox();
            }
        });
        
        // Bấm ra ngoài ảnh để đóng
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) hideLightbox();
        });
    }

    //8 Nút thu gọn/hiện thêm thông tin
    const expandToggleBtn = document.querySelector('.expand-toggle');
    if (expandToggleBtn) {
        expandToggleBtn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.toggle('hidden');
                if (targetContent.classList.contains('hidden')) {
                    this.textContent = 'Xem thêm';
                } else {
                    this.textContent = 'Thu gọn';
                }
            }
        });
    }
});