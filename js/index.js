window.addEventListener("scroll", function() {
    var header = document.querySelector(".title");
    var image = document.querySelector(".title img");
    var sideMenu = document.querySelector(".side");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scaleFactor = 1 - scrollTop / 400; // スクロールに応じて縮小する係数を計算
    var headerHeight = header.offsetHeight;
    var sideMenuHeight = sideMenu.offsetHeight;
    var maxScroll = sideMenuHeight - headerHeight;
    var maxScaleFactor = 0.75; // 縮小の限界値を設定（0.5は50%縮小）
  
    if (scrollTop > maxScroll) {
      scrollTop = maxScroll;
    }
  
    if (scrollTop > 0) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.height = "100px"
      header.style.background = "#eaeaea";
      header.style.zIndex = "9999"; // ヘッダーを最前面に配置
  
      scaleFactor = Math.max(maxScaleFactor, scaleFactor); // 縮小係数を限界値と比較して設定
      image.style.transform = "scale(" + scaleFactor + ")";
      image.style.transition = "transform 0.3s ease"; // 画像の縮小にトランジションを追加
    } else {
      header.style.position = "";
      header.style.top = "";
      header.style.left = "";
      header.style.width = "";
      header.style.height = "";
      header.style.background = "";
      header.style.zIndex = ""; // ヘッダーのz-indexを初期化
      image.style.transform = "";
      image.style.transition = ""; // トランジションを初期化
    }
  });

  window.addEventListener("load", function() {
    var elements = document.querySelectorAll(".apper");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.transitionDelay = i * 0.1 + "s";
      elements[i].classList.add("appear");
      elements[i].offsetHeight; // レイアウトの強制再計算
      elements[i].classList.add("appearing");
    }
  });
  
  
