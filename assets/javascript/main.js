document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-prev").onclick = function () {
    // Sự kiện 1
    let beltItems = document.querySelectorAll(".belt-item");
    // Kích hoạt animation
    beltItems[0].classList.add("hideContentLeft");
    

    for (let i = 1; i < beltItems.length; i++) {
      beltItems[i].classList.add("moveToLeft");
    }
    
    // Sau khi xử lý sự kiện 1, thực hiện sự kiện 2
    setTimeout(function () {
      beltItems[0].classList.remove("hideContentLeft");
      
      document.querySelector(".belt").appendChild(beltItems[0]);
      // Sự kiện 2
      for(i=1; i<beltItems.length;i++){
        beltItems[i].classList.remove("moveToLeft");
      }
      beltItems[5].style.display = "block";
      beltItems[5].classList.add("showContentLeft");
      beltItems[5].classList.remove("showContentLeft");
      beltItems[0].style.display="none";
    }, 500);
  };
});


