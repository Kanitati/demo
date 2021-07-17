// JavaScript Document
$(function(){
/*ハンバーガーメニュー*/
/*ハンバーガーメニューのクリックイベント*/
$('.toggle_btn').on('click',function(){
/*headerにopenが存在する場合*/
if($('#header').hasClass('open')){
//open削除
//openを削除すると、openのCSSが外れるため、メニューが非表示になる
$('#header').removeClass('open');

//#headerにopenが存在しない場合
} else{
//openを追加すると、openのCSSが適応されるため、メニューが表示される
$('#header').addClass('open');
}
});

//メニューが表示されている時に画面をクリックした場合
$('#mask').on('click', function(){
//openを削除して、メニューを閉じる
$('#header').removeClass('open');
});
});
