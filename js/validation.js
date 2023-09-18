document.addEventListener("DOMContentLoaded", function() {
  // フォームバリデーション
  const form = document.querySelector(".p-entry-form");
  const btn = document.querySelector(".c-btn02");

  function checkFormValidity() {
      // フォームの入力が有効かどうか確認
      if (form.checkValidity()) {
          btn.removeAttribute("disabled");
      } else {
          btn.setAttribute("disabled", "true");
      }
  }

  // フォームの入力にイベントリスナを追加
  form.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("input", checkFormValidity);
  });

  // 初期ロード時のチェック
  checkFormValidity();
});


