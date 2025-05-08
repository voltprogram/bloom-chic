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
