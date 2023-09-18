document.addEventListener("DOMContentLoaded", function() {

  // Swiper
  const swiper = new Swiper('.swiper', {
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
  });

  const swiperContainer = document.querySelector('.swiper');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Swiperコンテナがビューポート内に入ったとき、自動再生を再開
        swiper.autoplay.start();
      } else {
        // Swiperコンテナがビューポートから出たとき、自動再生を停止
        swiper.autoplay.stop();
      }
    });
  });

  observer.observe(swiperContainer);
});
