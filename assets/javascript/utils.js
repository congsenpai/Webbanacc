// utils.js
export function prependAndUpdateIndex(parentNode, newChild) {
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
  