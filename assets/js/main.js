$(function () {


  /**
   * @언어선택
   * 
   * 
   */

  $('#langBtn').click(function(){
    url=$('#langList').val();
    window.open(url)
  })





  const mainSlide = new Swiper(".main-slide", {
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction:false //컨트롤이후 진행유무
    },
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation:{
      nextEl:".btn-next",
      prevEl:".btn-prev"
    },
  });


   

    $('.sc-visual .btn-nav button').click(function(){
      idx=$(this).data('idx');
      $(this).addClass('on').siblings().removeClass('on');
      mainSlide.slideToLoop(idx);
    })


    mainSlide.on('slideChange',function(){
      if (this.realIndex >= 3) {
        $('.btn-citizens').addClass('on').siblings().removeClass('on');
      } else {
        $('.btn-news').addClass('on').siblings().removeClass('on');
      }
    })



    $(window).scroll(function(){
      curr=$(this).scrollTop();
      if(curr >= 20){
        $('.btn_top').addClass("on")
      }else{
        $('.btn_top').removeClass("on")
      }

    })

    $('.btn_top').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:"smooth"})
    })




  var bannerSlide = new Swiper(".banner-slide", {
    slidesPerView:3,
    spaceBetween:43,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction:false //컨트롤이후 진행유무
    },
    pagination: {
      el: ".fraction",
      type: "fraction",
    },
    navigation:{
      nextEl:".btn-next",
      prevEl:".btn-prev"
    },
  });


  slideArr=[mainSlide,bannerSlide]


  let autoplayState="";
  $('.btn-autoplay').click(function(){
    idx=$(this).data('slide');
    if ($(this).hasClass('on')) {
      slideArr[idx].autoplay.start();
      autoplayState = "자동재생적용"
      
    } else {
      slideArr[idx].autoplay.stop();
      autoplayState = "자동재생정지"
    }
    $(this).toggleClass('on').find('.blind').text(autoplayState)
  })




   $('.btn-related').click(function (e) {
      e.preventDefault();

      if ($(this).hasClass('on')) {
          $(this).removeClass('on').siblings('.sub-area').stop().slideUp()
      } else {
          $('.btn-related').removeClass('on').siblings('.sub-area').stop().slideUp()
          $(this).addClass('on').siblings('.sub-area').stop().slideDown()
      }
    })

    
    $('.relate-list .sub-area li:first-child').keydown(function(e){
      if (e.keyCode === 9 && e.shiftKey) {
        $('.btn-related').removeClass('on').siblings('.sub-area').stop().slideUp()
      }
    })
    $('.relate-list .sub-area li:last-child').keydown(function(e){
      if (e.keyCode === 9 && !e.shiftKey) {
        $('.btn-related').removeClass('on').siblings('.sub-area').stop().slideUp()
      }
    })




}); //지우면 안됨!
