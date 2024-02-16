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
      for (i = 1; i < beltItems.length; i++) {
        beltItems[i].classList.remove("moveToLeft");
      }
      beltItems[5].style.display = "block";
      beltItems[5].classList.add("showContentLeft");
      beltItems[5].classList.remove("showContentLeft");
      beltItems[0].style.display = "none";
    }, 500);
  };
});

// document.addEventListener("DOMContentLoaded", function () {
//   let autoSwitch = true; // Biến kiểm soát tự động chuyển item

//   // Hàm xử lý sự kiện chuyển đổi item
//   function switchItem() {
//     let beltItems = document.querySelectorAll(".belt-item");
//     beltItems[0].classList.add("hideContentLeft");

//     for (let i = 1; i < beltItems.length; i++) {
//       beltItems[i].classList.add("moveToLeft");
//     }

//     setTimeout(function () {
//       beltItems[0].classList.remove("hideContentLeft");
//       document.querySelector(".belt").appendChild(beltItems[0]);

//       for (let i = 1; i < beltItems.length; i++) {
//         beltItems[i].classList.remove("moveToLeft");
//       }
//       beltItems[5].style.display = "block";
//       beltItems[5].classList.add("showContentLeft");
//       beltItems[5].classList.remove("showContentLeft");
//       beltItems[0].style.display = "none";
//     }, 500);
//   }

//   // Gọi hàm switchItem mỗi 2 giây nếu autoSwitch là true
//   let intervalId = setInterval(function () {
//     if (autoSwitch) {
//       switchItem();
//     }
//   }, 2000);

//   // Xử lý sự kiện click của nút "prev"
//   document.getElementById("btn-prev").onclick = function () {
//     switchItem(); // Chuyển item khi click vào nút "prev"
//   };

//   // Xử lý sự kiện hover vào và rời đi khỏi phần tử "belt container"
//   document.querySelector(".belt-container").addEventListener("mouseenter", function () {
//     autoSwitch = false; // Dừng tự động chuyển item khi hover vào
//   });

//   document.querySelector(".belt-container").addEventListener("mouseleave", function () {
//     autoSwitch = true; // Tiếp tục tự động chuyển item khi rời đi khỏi "belt container"
//   });
// });

// khi nhấn vào nút di chuyển sang phải của beltItem
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-next").onclick = function () {
    const belt = document.querySelector(".belt");
    let beltItems = document.querySelectorAll(".belt-item");
    // Sự kiện 1
    beltItems[4].classList.add("hideContentRight");

    // Kích hoạt animation
    for (let i = 0; i <= 3; i++) {
      beltItems[i].classList.add("moveToRight");
    }

    // Sau khi xử lý sự kiện 1, thực hiện sự kiện 2
    {
    }
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        beltItems[i].classList.remove("moveToRight");
      }
      prependAndUpdateIndex(belt, belt.lastElementChild);
      belt.firstElementChild.classList.add("showContentRight");
    }, 500);
  };
});
// base
function prependAndUpdateIndex(parentNode, newChild) {
  // Lấy danh sách nút con hiện tại
  var nodeList = parentNode.childNodes;

  // Chèn phần tử mới vào đầu danh sách nút con
  if (parentNode.firstChild) {
    parentNode.insertBefore(newChild, parentNode.firstChild);
  } else {
    parentNode.appendChild(newChild);
  }

  // Cập nhật chỉ mục của các phần tử còn lại trong nodeList
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].index = i; // Cập nhật chỉ mục cho mỗi phần tử
  }
}
