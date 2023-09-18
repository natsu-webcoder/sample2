document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init();
});


$(function () {

  //ハンバーガーメニュー
  var btnMenu = $(".js-btn-menu");
  var globalNav = $(".p-global-nav");

  btnMenu.on("click", function () {
    btnMenu.toggleClass("is-active");
    globalNav.toggleClass("is-show");
  });

  // メニュー項目がクリックされたときにメニューを閉じる
  $(".p-global-nav__link").on("click", function () {
    btnMenu.removeClass("is-active");
    globalNav.removeClass("is-show");
  });

  //ページ内スクロール
  $('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var offset = 105;
    if ($(window).width() <= 767) {
      offset = 80;
    }

    var position = target.offset().top - offset;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });


  //他ページから遷移したときにセクション位置を調整する
  function scrollToHash() {
    var hash = window.location.hash;
    if (hash) {
      var target = $(hash);
      var offset = 105;
      if ($(window).width() <= 767) {
        offset = 80;
      }
      var position = target.offset().top - offset;
      $("html, body").animate({
        scrollTop: position
      }, 300, "swing");
    }
  }
  scrollToHash();  // ページ読み込み時に関数を呼び出す


  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".l-header").addClass("is-active");
    } else {
      $(".l-header").removeClass("is-active");
    }
  });
});


// 下層ページを離れるときにsessionStorageにキーと値を保存
window.onbeforeunload = function () {
  sessionStorage.setItem('fromSubpage', 'true');
}


!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  }
  addEventListener('resize', switchViewport, false);
  switchViewport();
})()
