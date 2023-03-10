// -----  基本功能開關   ---------------------------------------------------
topNav(); // 手機版顯示nav選單
// navSticky(); // 捲動時固定主選單
fatFooter(); // fatFooter是否要展開
tabFunction('.tabSet'); // tab功能
scrollTables('table'); // table捲動功能
fontSize();
tableAddDataAttributes({
  elemClass: '.tableList', // 目標table
  dataName: 'title', // tableList樣式 加上 data-title
});

// 手風琴功能
accordionSlider({
  list: '.accordionList', // 問題區塊
  content: '.accordionContent', // 回答區塊
  autoSlider: false, // true 點選其他項目時會關閉已開啟的內容，false 需要再點一次才會關閉
  duration: 300, // 展開縮起的時間
  info: {
    open: '展開', // 收合時顯示
    close: '收合', // 展開時顯示
  },
});

//內頁側邊主選單展開功能
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //hero輪播
  let heroSliderItem = document.querySelectorAll('.heroSlider .swiper-slide');
  let heroSliderPagination = [];
  heroSliderItem.forEach((item, index) => {
    heroSliderPagination.push(item.dataset.title);
  });
  const heroSlider = new Swiper('.heroSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.heroSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${heroSliderPagination[index]}">${heroSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    // navigation: {
    //   nextEl: '.heroSlider .nextSlider', //自行設定樣式
    //   prevEl: '.heroSlider .prevSlider', //自行設定樣式
    //   disabledClass: 'swiperArrow-disabled', //不可點選樣式
    // },
  });

  // 特殊輪播
  let infoSliderItem = document.querySelectorAll('.infoSlider .swiper-slide');
  let infoSliderPagination = [];
  infoSliderItem.forEach((item, index) => {
    infoSliderPagination.push(item.dataset.title);
  });
  const infoSlider = new Swiper('.infoSlider .swiper', {
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.infoSlider .swiperDots',
      type: 'fraction',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${infoSliderPagination[index]}">${infoSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.infoSlider .nextSlider', //自行設定樣式
      prevEl: '.infoSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1.25,
      },
      767: {
        slidesPerView: 2.25,
      },
      1000: {
        slidesPerView: 3.25,
      },
    },
  });

  //廣告輪播
  let adSliderItem = document.querySelectorAll('.adSlider .swiper-slide');
  let adSliderPagination = [];
  const adSwiper = new Swiper('.adSlider .swiper', {
    // slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    // pagination: {
    //   el: '.adSlider .swiperDots',
    //   bulletElement: 'button',
    //   clickable: true,
    // },
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${adSliderPagination[index]}">${adSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider.swiperArrow', //自行設定樣式
      prevEl: '.adSlider .prevSlider.swiperArrow', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 5,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .marquee-next', //自行設定樣式
      prevEl: '.marquee .marquee-prev', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });
})();
