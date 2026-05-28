const focusButtons = document.querySelectorAll(".focus-btn");
const focusCards = document.querySelectorAll(".focus-card");

focusButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const targetId = button.dataset.target;
    const targetCard = document.getElementById(targetId);

    // 清除所有按鈕 active 狀態
    focusButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    // 隱藏所有卡片
    focusCards.forEach(function(card) {
      card.classList.remove("show");
    });

    // 當前按鈕變 active
    button.classList.add("active");

    // 顯示對應卡片
    if (targetCard) {
      targetCard.classList.add("show");
    }

  });

});


// Preview 圖片展開功能
const previewButtons = document.querySelectorAll(".preview-btn");

previewButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const targetId = button.dataset.preview;
    const gallery = document.getElementById(targetId);

    // 如果找到對應圖片區塊
    if (gallery) {

      // 切換 show class
      gallery.classList.toggle("show");

    }

  });

});