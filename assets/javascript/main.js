// module belt scroll
const belt = document.querySelector(".belt");
const numberElements = document.querySelectorAll(".belt-item").length;
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const scrollAmount = 220; // Số lượng pixel mỗi lần cuộn
  const scrollInterval = 2000; // Thời gian giữa các cuộn tự động (ms)
  let autoScrollInterval;

  function scrollToLeft() {
    belt.children[0].classList.add('hideContentLeft');
    belt.style.transition = "transform 0.5s ease";
    belt.style.transform = "translateX(-" + scrollAmount + "px)";
    setTimeout(() => {
      belt.children[0].classList.remove('hideContentLeft');
      belt.children[5].classList.add('showContentLeft');
      belt.appendChild(belt.firstElementChild);
      belt.style.transition = "none";
      belt.style.transform = "translateX(0)";
    }, 300);
  }
  function scrollToRight() {
    belt.style.transition = "transform 0.5s ease";
    belt.style.transform = "translateX(" + scrollAmount + "px)";
    belt.children[4].classList.add('hideContentRight');
    setTimeout(() => {
      belt.children[4].classList.remove('hideContentRight');
      belt.insertBefore(belt.lastElementChild, belt.firstElementChild);
      belt.children[0].classList.add('showContentRight');
      belt.style.transition = "none";
      belt.style.transform = "translateX(0)";
    }, 300);
   
  }


  function startAutoScroll() {
      autoScrollInterval = setInterval(scrollToLeft, scrollInterval);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  nextBtn.addEventListener("click", function () {
    stopAutoScroll();
    clearShowContent();
    scrollToRight();

  });
  function clearShowContent() {
    belt.querySelectorAll('.showContentLeft, .showContentRight').forEach(element => {
        element.classList.remove('showContentLeft', 'showContentRight');
    });
}

  prevBtn.addEventListener("click", function () {
    stopAutoScroll();
    clearShowContent();
    scrollToLeft();
  });

  belt.addEventListener("mouseenter", stopAutoScroll);
  belt.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll(); // Bắt đầu cuộn tự động khi trang được tải
});
