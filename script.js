// =========================================================
// Focus 公司切換
// =========================================================

const focusButtons = document.querySelectorAll(".focus-btn");
const focusCards = document.querySelectorAll(".focus-card");

focusButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const targetId = button.dataset.target;
    const targetCard = document.getElementById(targetId);

    const alreadyActive = button.classList.contains("active");


    // 先清除所有按鈕
    focusButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });


    // 先關閉所有卡片
    focusCards.forEach(function (card) {
      card.classList.remove("show");
    });


    // 如果原本不是開啟狀態，就打開
    if (!alreadyActive && targetCard) {

      button.classList.add("active");
      targetCard.classList.add("show");

    }

  });

});



// =========================================================
// 作品 Preview 展開功能
// =========================================================

const previewButtons = document.querySelectorAll(".preview-btn");

previewButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const targetId = button.dataset.preview;
    const gallery = document.getElementById(targetId);

    if (gallery) {

      gallery.classList.toggle("show");


      // 切換按鈕文字
      if (gallery.classList.contains("show")) {

        button.textContent = "Close Preview";

      } else {

        button.textContent = "View Preview";

      }

    }

  });

});
