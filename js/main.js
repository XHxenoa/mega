const swiper1 = new Swiper('.swiper-container1', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// movie

  const swiper2 = new Swiper('.swiper-container2', {
    // Optional parameters
    //loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        //뷰포터의 넓이>=0
        0: {
          slidesPerView: 1.4,
          spaceBetween: 24
        },
        //뷰포터의 넓이>=600
        600: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        //뷰포터의 넓이>=768
        768: {
          slidesPerView: 4,
          spaceBetween: 24
        },
        //뷰포터의 넓이>=960
        960: {
          slidesPerView: 4,
          spaceBetween: 24
          }
      }
  });

  //movie tab menu
  var movBtn = $('.movie_title ul li');
  var movCont=$('.movie_chart>div');

  movCont.hide().eq(0).show();

movBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    console.log(index);
    movCont.hide().eq(index).show();
    movBtn.removeClass('active'); //모든 li의 클래스 active 지우기
    target.addClass('active'); //클릭한 li에 클래스 추가
});