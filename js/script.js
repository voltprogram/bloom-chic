// ハンバーガーメニュー開閉
document.querySelector('.toggle-menu').addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('header').classList.toggle('open');
})

// アコーディオンをクリックした時の動作
$('.accordion-title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".accordion-txt-box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

// コンタクトフォームで入力した内容をconfirm.htmlに継承
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#contact-main").addEventListener("submit", function(e) {
	e.preventDefault();
	const form = e.target;
	localStorage.setItem("formData", JSON.stringify({
		name: form.name.value,
		furigana: form.furigana.value,
		mail: form.mail.value,
		tel: form.tel.value,
		comment: form.comment.value,
		privacy: form.privacy.checked ? "同意する" : "未同意"
	}));
	window.location.href = "confirm.html";
	});
});

// コンタクトフォームで入力した内容をthanks.htmlに継承
document.addEventListener("DOMContentLoaded", function () {
	const data = JSON.parse(localStorage.getItem("formData"));
	if (!data) {
	window.location.href = "index.html"; // データがなければ戻す
	return;
	}

	// 内容を画面に表示
	document.getElementById("conf-name").textContent = data.name;
	document.getElementById("conf-furigana").textContent = data.furigana;
	document.getElementById("conf-mail").textContent = data.mail;
	document.getElementById("conf-tel").textContent = data.tel;
	document.getElementById("conf-comment").textContent = data.comment;

	// フォームに値をセット（Formspree送信用）
	const form = document.querySelector("form.confirm");
	form.querySelector("input[name='name']").value = data.name;
	form.querySelector("input[name='furigana']").value = data.furigana;
	form.querySelector("input[name='mail']").value = data.mail;
	form.querySelector("input[name='tel']").value = data.tel;
	form.querySelector("input[name='comment']").value = data.comment;
	form.querySelector("input[name='privacy']").value = data.privacy;

	// 送信後にlocalStorageを削除（必要に応じて）
	form.addEventListener("submit", function () {
	localStorage.removeItem("formData");
	});
});
