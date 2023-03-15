// -----  基本功能開關   ---------------------------------------------------
topNav(); // 手機版顯示nav選單
// navSticky(); // 捲動時固定主選單
fatFooter(); // fatFooter是否要展開
// tabFunction('.tabSet'); // tab功能
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

function TabFunction2() {
  'use strict';
  let openIndex = 1 - 1;
  const tab = document.querySelector('.tabSet2');
  let desktopTabItems;

  function init() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');

    tabItem.forEach((item, index) => {
      const random = `tab_${randomLetter(4)}${randomFloor(0, 9999)}`;
      const text = item.innerHTML;
      item.setAttribute('aria-selected', 'false');
      item.setAttribute('role', 'tab');
      item.setAttribute('aria-controls', random);
      // item.setAttribute('aria-selected', 'false');
      contentItem[index].setAttribute('aria-labelledby', random);
      contentItem[index].setAttribute('aria-label', text);
    });
    desktopTabItems = tab.querySelector('.tabItems').cloneNode(true);
  }

  function a11yControlMobile() {
    const tabItem = tab.querySelectorAll('.tabContent .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent .content');
    tabItem.forEach((item, i) => {
      function handleKeydown(e) {
        if (e.which === 9 && !e.shiftKey && !this.classList.contains('active')) {
          toggleAccordion(this, this.nextElementSibling);
        } else if (e.which === 9 && e.shiftKey) {
          toggleAccordion(this, this.nextElementSibling);
        }
      }

      item.removeEventListener('keydown', handleKeydown);
      item.addEventListener('keydown', handleKeydown);
    });
  }

  function clickFunctionMobile() {
    const tabItem = tab.querySelectorAll('.tabContent .tabBtn');

    tabItem.forEach((item, index) => {
      function clickCheck() {
        toggleAccordion(this, this.nextElementSibling);
      }

      item.removeEventListener('click', clickCheck);
      item.addEventListener('click', clickCheck);
    });
  }

  function toggleAccordion(item, content) {
    let display = window.getComputedStyle(content).display;
    content.style.display = display;

    if (display === 'none') {
      item.classList.add('active');

      display = 'block';
      content.style.overflow = 'hidden';
      content.style.display = display;
      // content.classList.add('active');
      let height = content.offsetHeight;
      content.style.height = 0;
      content.offsetHeight;
      content.style.transitionProperty = 'height';
      content.style.transitionDuration = `300ms`;
      content.style.height = height + 'px';

      setTimeout(() => {
        content.style.removeProperty('overflow');
        content.style.removeProperty('height');
        content.style.removeProperty('transition-duration');
        content.style.removeProperty('transition-property');
      }, 300);
    } else {
      item.classList.remove('active');
      content.style.overflow = 'hidden';
      content.style.height = `${content.offsetHeight}px`;
      content.style.transitionProperty = 'height';
      content.style.transitionDuration = `300ms`;
      content.offsetHeight;
      content.style.height = 0;
      setTimeout(() => {
        content.style.display = 'none';
        content.style.removeProperty('overflow');
        content.style.removeProperty('height');
        content.style.removeProperty('display');
        content.style.removeProperty('transition-duration');
        content.style.removeProperty('transition-property');
      }, 300);
    }

    const siblings = Array.prototype.filter.call(item.parentElement.parentElement.children, (child) => {
      return child !== item.parentElement;
    });
  }

  function a11yControl() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    const lastFocus = [...tab.querySelectorAll('a,input,select,textarea')].pop();
    const firstFocus = [...tab.querySelectorAll('a,input,select,textarea')].shift();
    const firstItem = [...tab.querySelectorAll('.tabBtn')].shift();
    tabItem.forEach((item, index) => {
      let content = contentItem[index].querySelectorAll('a,input,select,textarea');
      let prevItem = contentItem[index - 1] !== undefined ? contentItem[index - 1].querySelectorAll('a,input,select,textarea') : '';
      let prevItemLastA;
      prevItem !== undefined ? (prevItemLastA = prevItem[prevItem.length - 1]) : '';

      function handleKeydown(e) {
        if (e.which === 9 && !e.shiftKey) {
          e.preventDefault();
          openTarget(tabItem, contentItem, index);
          content[0].focus();
        } else if (e.which === 9 && e.shiftKey && e.target !== firstItem) {
          e.preventDefault();
          openTarget(tabItem, contentItem, index - 1);
          if (prevItemLastA !== undefined) {
            prevItemLastA.focus();
          } else {
            tabItem[index - 1].focus();
          }
        }
      }
      item.removeEventListener('keydown', handleKeydown);
      item.addEventListener('keydown', handleKeydown);

      if (content.length !== 0) {
        function contentFirstCheck(e) {
          if (e.which === 9 && e.shiftKey && index !== 0) {
            e.preventDefault();
            tabItem[index].focus();
          } else if (e.which === 9 && e.shiftKey && e.target == firstFocus) {
            e.preventDefault();
            tabItem[0].focus();
          }
        }
        content[0].removeEventListener('keydown', contentFirstCheck);
        content[0].addEventListener('keydown', contentFirstCheck);
        function contentLastCheck(e) {
          if (e.which === 9 && !e.shiftKey && e.target !== lastFocus) {
            tabItem[index].focus();
          }
        }
        content[content.length - 1].removeEventListener('keydown', contentLastCheck);
        content[content.length - 1].addEventListener('keydown', contentLastCheck);
      }
    });
  }

  function clickFunction() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    tabItem.forEach((item, index) => {
      function clickCheck(e) {
        openTarget(tabItem, contentItem, index);
      }
      item.removeEventListener('click', clickCheck);
      item.addEventListener('click', clickCheck);
      // }
    });
  }

  function openTarget(tabItem, contentItem, index) {
    let siblingContentItem = [...contentItem].filter((item, index) => item !== this);
    tabItem.forEach((item, index) => item.classList.remove('active'));
    siblingContentItem.forEach((item, index) => item.classList.remove('active'));
    contentItem[index].classList.add('active');
    tabItem[index].classList.add('active');
  }

  function desktopType() {
    tab.classList.remove('onMobile');
    tab.querySelector('.tabItems') ? '' : tab.prepend(desktopTabItems);
    const contentItem = tab.querySelectorAll('.tabContent');
    contentItem.forEach((item, index) => {
      if (item.querySelector('.tabBtn') !== null) {
        item.querySelector('.tabBtn').remove();
      }
    });
  }

  function mobileType() {
    tab.classList.add('onMobile');
    tab.querySelector('.tabItems') ? (desktopTabItems = tab.querySelector('.tabItems').cloneNode(true)) : '';
    tab.classList.add('onMobile');
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');

    tabItem.forEach((item, i) => {
      let btnContent = item.innerHTML;
      let newBtn = item.cloneNode();
      newBtn.innerHTML = btnContent;
      contentItem[i].prepend(newBtn);
      contentItem[i].querySelector('.content').setAttribute('role', 'tabpanel');
      contentItem[i].querySelector('.content').setAttribute('aria-labelledby', item.attributes['aria-controls'].value);
      contentItem[i].querySelector('.content').setAttribute('aria-label', item.innerHTML);

      contentItem[i].removeAttribute('role');
      contentItem[i].removeAttribute('aria-label');
      contentItem[i].removeAttribute('aria-labelledby');
    });

    tab.querySelector('.tabItems') ? tab.querySelector('.tabItems').remove() : '';
  }

  init();
  checkType();
  function checkType() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    tabItem.forEach((item, index) => {
      item.classList.remove('active');
      contentItem[index].classList.remove('active');
      contentItem[index].querySelector('.content').style.display = 'none';
      item.setAttribute('aria-selected', false);
    });
    tabItem[openIndex] ? tabItem[openIndex].setAttribute('aria-selected', 'true') : '';
    tabItem[openIndex] ? tabItem[openIndex].classList.add('active') : '';

    let tabWidth = tab.offsetWidth;
    setTimeout(() => {
      if (tabWidth > 700) {
        contentItem[openIndex].classList.add('active');
        tabItem.forEach((item, index) => {
          contentItem[index].querySelector('.content').removeAttribute('style');
        });
        desktopType();
        a11yControl();
        clickFunction();
      } else {
        contentItem[openIndex].querySelector('.content').style.display = 'block';
        mobileType();
        clickFunctionMobile();
        a11yControlMobile();
      }
    }, 100);
  }
  window.addEventListener('resize', checkType);
}
TabFunction2();
