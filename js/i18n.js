// Internationalization (i18n) Configuration
const translations = {
    vi: {
        // Navigation
        home: "Trang chủ",
        destinations: "Địa điểm",
        cuisine: "Ẩm thực",
        festivals: "Lễ hội",
        contact: "Liên hệ",
        
        // Hero Section
        hero_title: "Khám Phá Đà Nẵng",
        hero_desc: "Thành phố đáng sống nhất Việt Nam với những bãi biển tuyệt đẹp và con người thân thiện.",
        explore_now: "Khám phá ngay",

        hero_title_2: "Biển Xanh Cát Trắng",
        hero_desc_2: "Sở hữu những bãi biển quyến rũ nhất hành tinh.",
        
        // Features Section
        why_danang: "Vì sao chọn Đà Nẵng?",
        beautiful_beach: "Địa điểm du lịch nổi tiếng",
        beach_desc: "Khám phá những địa điểm du lịch nổi tiếng và hấp dẫn tại Đà Nẵng.",
        tasty_food: "Ẩm thực phong phú",
        food_desc: "Thưởng thức hương vị miền Trung đậm đà khó quên.",
        uni_festival: "Lễ hội độc đáo",
        festival_desc: "Tham gia vào những lễ hội sôi động và đậm đà bản sắc văn hóa Đà Nẵng.",
        
        // Common
        read_more: "Xem chi tiết",
        quick_links: "Liên kết nhanh",
        connect: "Kết nối",
        
        // Destinations Page
        destinations_title: "Các Địa Điểm Nổi Bật",
        no_result: "Không tìm thấy địa điểm phù hợp.",
        search_placeholder: "Tìm kiếm địa điểm...",
        
        // Destination Cards
        marble_mountains: "Ngũ Hành Sơn",
        marble_desc: "Một trong những danh lam thắng cảnh nổi tiếng nhất Đà Nẵng với 5 quả núi đá vôi tuyệt đẹp.",
        
        golden_bridge: "Cầu Vàng",
        golden_desc: "Một trong những cây cầu độc đáo nhất thế giới, được xây dựng tại độ cao 1400m trên Fansipan.",
        
        han_market: "Chợ Hàn",
        han_desc: "Chợ truyền thống với đa dạng các sản phẩm địa phương và đồ lưu niệm độc đáo.",
        
        my_khe_beach: "Bãi Biển Mỹ Khê",
        myKhe_desc: "Bãi biển dài nhất Đà Nẵng với cát trắng mịn và nước xanh trong suốt.",
        
        dragon_bridge: "Cầu Rồng",
        dragon_desc: "Biểu tượng của thành phố Đà Nẵng với kiến trúc độc đáo hình con rồng.",
        
        ba_na_hills: "Ba Na Hills",
        bana_desc: "Một điểm du lịch tuyệt vời với khí hậu mát mẻ, công viên giải trí và quần áo truyền thống.",
        
        // Cuisine Page
        cuisine_title: "Ẩm Thực Đà Nẵng",
        cuisine_desc: "Khám phá những món ăn ngon nhất từ miền Trung Việt Nam",
        
        cao_lau: "Cao Lầu",
        cao_lau_desc: "Một trong những đặc sản phổ biến nhất của Quảng Nam với bánh sợi mềm, phần thịt heo ngọt lịm.",
        
        banh_my: "Bánh Mỳ Đà Nẵng",
        banh_my_desc: "Bánh mỳ Việt Nam với các thành phần tươi ngon: chả lụa, pâté, dưa chuột, hành.",
        
        shrimp_cake: "Bánh Tôm",
        shrimp_cake_desc: "Bánh chiên giòn với tôm và khoai lang, là đặc sản của các thị xã miền Trung.",
        
        pho: "Phở Đà Nẵng",
        pho_desc: "Phở nướng đặc trưng với hương vị đặc biệt, có nguyên liệu là nước dùng thơm từ xương.",
        
        fish_cake: "Chả Cá Tô",
        fish_cake_desc: "Chả cá được làm từ cá tươi, được chiên vàng giòn và ăn kèm với nước mắm chua ngọt.",

        mi_quang: "Mì Quảng",
        mi_quang_desc: "Mì Quảng là món ăn đặc sản của Hội An, với hương vị thơm ngon và cách chế biến độc đáo.",
        
        // Festivals Page
        festivals_title: "Lễ Hội Đà Nẵng",
        festivals_desc: "Những lễ hội sôi động và đầy màu sắc của thành phố Đà Nẵng",
        
        lantern_festival: "Lễ Hội Đèn Lồng",
        lantern_desc: "Lễ hội truyền thống diễn ra vào ngày rằm tháng Giêng hằng năm tại Hội An.",
        
        fireworks: "Lễ Hội Pháo Hoa",
        fireworks_desc: "Lễ hội quốc tế độc đáo với những màn pháo hoa tuyệt đẹp phục vụ du lịch.",
        
        danang_cau_ngu: "Lễ Hội Cầu Ngư Đà Nẵng",
        danang_cau_ngu_desc: "Lễ hội truyền thống với các hoạt động thể thao, văn hóa và giải trí sôi động.",

        da_nang_dinh_lang_tuy_am: "Lễ Hội Đình Làng Tuý Loan",
        danang_dinh_lang_tuy_am_desc: "Lễ hội đặc biệt nổi tiếng với các hoạt động truyền thống.",

        da_nang_quan_the_am: "Lễ Hội Quán Thế Âm",
        danang_quan_the_am_desc: "Lễ hội Phật giáo lớn nhất, tại chùa Quán Thế Âm, quận Ngũ Hành Sơn.",

        da_nang_beer_festival: "Lễ Hội Bia/Hoa",
        danang_beer_festival_desc: "Diễn ra quanh năm, đặc biệt sôi động vào mùa hè.",
        
        // Contact Page
        contact_title: "Liên Hệ",
        contact_desc: "Hãy liên hệ với chúng tôi để có thông tin chi tiết và hỗ trợ",
        name: "Họ và tên",
        email: "Email",
        message: "Tin nhắn",
        send: "Gửi",
        phone: "Điện thoại",
        address: "Bản đồ du lịch Đà Nẵng",
        email_info: "info@exploredanang.com",
        
        // Footer
        footer_desc: "Cùng bạn tạo nên những kỷ niệm tuyệt vời tại thành phố đáng sống.",
        follow_us: "Theo dõi chúng tôi",
        all_rights: "© 2026 DaNang Travel. Tất cả các quyền được bảo lưu.",
        phone: "Điện thoại",
    },
    
    en: {
        // Navigation
        home: "Home",
        destinations: "Destinations",
        cuisine: "Cuisine",
        festivals: "Festivals",
        contact: "Contact",
        
        // Hero Section
        hero_title: "Explore Da Nang",
        hero_desc: "The most livable city in Vietnam with stunning beaches and friendly people.",
        explore_now: "Explore Now",

        hero_title_2: "Blue Sea and White Sand",
        hero_desc_2: "Home to some of the most alluring beaches on the planet.",
        
        // Features Section
        why_danang: "Why Choose Da Nang?",
        beautiful_des: "Famous Destinations",
        des_desc: "Discover the famous and attractive tourist destinations in Da Nang.",
        tasty_food: "Rich Cuisine",
        food_desc: "Experience the distinctive flavors of the Central region.",
        uni_festival: "Unique Festivals",
        festival_desc: "Join vibrant festivals full of colors and rich cultural identity of Da Nang people.",
        
        // Common
        read_more: "Read More",
        quick_links: "Quick Links",
        connect: "Connect With Us",
        
        // Destinations Page
        destinations_title: "Top Destinations",
        no_result: "No destinations found.",
        search_placeholder: "Search destinations...",
        
        // Destination Cards
        marble_mountains: "Marble Mountains",
        marble_desc: "One of Da Nang's most famous attractions with 5 beautiful limestone mountains.",
        
        golden_bridge: "Golden Bridge",
        golden_desc: "One of the world's most unique bridges, built at 1400m altitude on Fansipan.",
        
        han_market: "Han Market",
        han_desc: "Traditional market with a variety of local products and unique souvenirs.",
        
        my_khe_beach: "My Khe Beach",
        myKhe_desc: "The longest beach in Da Nang with fine white sand and clear water.",
        
        dragon_bridge: "Dragon Bridge",
        dragon_desc: "An icon of Da Nang city with unique dragon-shaped architecture.",
        
        ba_na_hills: "Ba Na Hills",
        bana_desc: "A wonderful tourist destination with cool weather, amusement parks and traditional clothes.",
        
        // Cuisine Page
        cuisine_title: "Da Nang Cuisine",
        cuisine_desc: "Discover the best dishes from Central Vietnam",
        
        cao_lau: "Cao Lau",
        cao_lau_desc: "One of the most popular specialties of Quang Nam with soft noodles and sweet pork.",
        
        banh_my: "Vietnamese Banh Mi",
        banh_my_desc: "Vietnamese sandwich with fresh ingredients: cold cuts, pâté, cucumber, and onions.",
        
        shrimp_cake: "Shrimp Cake",
        shrimp_cake_desc: "Fried cake with shrimp and sweet potato, a specialty of the central provinces.",
        
        pho: "Da Nang Pho",
        pho_desc: "Roasted pho with unique flavors, made with aromatic bone broth.",
        
        fish_cake: "Cha Ca To",
        fish_cake_desc: "Fish cake made from fresh fish, fried until golden and served with sweet and spicy fish sauce.",

        mi_quang: "Mi Quang",
        mi_quang_desc: "Mi Quang is a specialty dish of Hoi An, with delicious flavors and unique preparation methods.",
        
        // Festivals Page
        festivals_title: "Da Nang Festivals",
        festivals_desc: "Vibrant and colorful festivals of Da Nang city",
        
        lantern_festival: "Lantern Festival",
        lantern_desc: "Traditional festival held on the 15th day of the first lunar month annually in Hoi An.",
        
        fireworks: "Fireworks Festival",
        fireworks_desc: "A unique international festival with spectacular fireworks for tourism.",
        
        danang_cau_ngu: "Da Nang Cau Ngu Festival",
        danang_cau_ngu_desc: "Traditional festival with vibrant sports, cultural and entertainment activities.",

        da_nang_dinh_lang_tuy_am: "Dinh Lang Tuy Loan Festival",
        danang_dinh_lang_tuy_am_desc: "A special festival famous for traditional activities.",

        da_nang_quan_the_am: "Quan The Am Festival",
        danang_quan_the_am_desc: "The largest Buddhist festival, held at Quan The Am Pagoda, Ngu Hanh Son district.",

        da_nang_beer_festival: "Da Nang Beer/Flower Festival",
        danang_beer_festival_desc: "Held year-round, especially vibrant during the summer.",
        
        // Contact Page
        contact_title: "Contact Us",
        contact_desc: "Please contact us for detailed information and support",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        phone: "Phone",
        address: "Da Nang Travel Map",
        email_info: "info@exploredanang.com",
        
        // Footer
        footer_desc: "Creating wonderful memories with you at the most livable city.",
        follow_us: "Follow Us",
        all_rights: "© 2026 DaNang Travel. All rights reserved.",
        phone: "Phone",
    }
};

// Get current language from localStorage, default to Vietnamese
let currentLang = localStorage.getItem('language') || 'vi';

// Update all elements with data-i18n attribute
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.hasAttribute('data-i18n-attr')) {
                const attr = element.getAttribute('data-i18n-attr');
                element.setAttribute(attr, translations[lang][key]);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'text' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'vi' ? 'ltr' : 'ltr';
}

// Get translation for a specific key
function getTranslation(key, lang) {
    lang = lang || currentLang;
    return translations[lang][key] || key;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});
