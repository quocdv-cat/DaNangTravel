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
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            if(backToTopBtn) backToTopBtn.style.display = 'block';
        } else {
            header.style.boxShadow = 'var(--shadow)';
            if(backToTopBtn) backToTopBtn.style.display = 'none';
        }
        
        // Scroll fade-in effect
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    });

    if(backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Dark Mode Toggle (Lưu LocalStorage)
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) body.classList.add('dark-mode');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            themeBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });
        // Cập nhật icon ban đầu
        themeBtn.innerHTML = isDarkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }

    // 5. Ngôn ngữ (i18n) & LocalStorage
    const langBtn = document.getElementById('lang-toggle');
    const translations = {
        vi: {
            home: "Trang chủ", destinations: "Địa điểm", cuisine: "Ẩm thực",
            festivals: "Lễ hội", contact: "Liên hệ", hero_title: "Khám Phá Đà Nẵng",
            hero_desc: "Thành phố đáng sống nhất Việt Nam với những bãi biển tuyệt đẹp.",
            explore_now: "Khám phá ngay", why_danang: "Vì sao chọn Đà Nẵng?",
            beautiful_beach: "Biển xanh cát trắng", read_more: "Xem chi tiết",
            destinations_title: "Các Địa Điểm Nổi Bật", no_result: "Không tìm thấy địa điểm phù hợp."
        },
        en: {
            home: "Home", destinations: "Destinations", cuisine: "Cuisine",
            festivals: "Festivals", contact: "Contact", hero_title: "Explore Da Nang",
            hero_desc: "The most livable city in Vietnam with stunning beaches.",
            explore_now: "Explore Now", why_danang: "Why choose Da Nang?",
            beautiful_beach: "White sandy beaches", read_more: "Read More",
            destinations_title: "Top Destinations", no_result: "No destinations found."
        }
    };
    
    let currentLang = localStorage.getItem('lang') || 'vi';
    
    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    };

    updateLanguage(currentLang);
    if(langBtn) langBtn.textContent = currentLang === 'vi' ? 'VI | EN' : 'EN | VI';

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'vi' ? 'en' : 'vi';
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
            langBtn.textContent = currentLang === 'vi' ? 'VI | EN' : 'EN | VI';
        });
    }

    // 6. Tính năng Yêu thích (Favorites) lưu LocalStorage
    const favBtns = document.querySelectorAll('.fav-icon-btn');
    const favCountEl = document.getElementById('fav-count');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const updateFavCount = () => {
        if(favCountEl) favCountEl.textContent = favorites.length;
    };

    // Khởi tạo trạng thái ban đầu
    favBtns.forEach(btn => {
        const id = btn.getAttribute('data-id');
        if (favorites.includes(id)) {
            btn.classList.add('liked');
            btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Tránh chuyển link nếu nằm trong thẻ a
            if (favorites.includes(id)) {
                favorites = favorites.filter(favId => favId !== id);
                btn.classList.remove('liked');
                btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            } else {
                favorites.push(id);
                btn.classList.add('liked');
                btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            updateFavCount();
        });
    });
    updateFavCount();

    // 7. Search Địa điểm Real-time
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

    // 8. Gallery Lightbox
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
});