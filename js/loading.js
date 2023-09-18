
$(window).on('load', function () {
  $("#loading").delay(1200).fadeOut('slow');//ローディング画面を1.2秒（1200ms）待機してからフェードアウト
});
//テキストのカウントアップの設定
var bar = new ProgressBar.Line(loading_text, {//id名を指定
  strokeWidth: 0,//進捗ゲージの太さ
  duration: 1000,//時間指定(1000＝1秒)
  trailWidth: 0,//線の太さ
  text: {//テキストの形状を直接指定 
    style: {
      position: 'absolute',
      left: '50%',
      top: '80%',
      margin: '0',
      transform: 'translate(-50%,-50%)',
      'font-family': 'sans-serif',
      'font-size': '1.5rem',
      color: '#333',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画
  $("#loading_text").delay(0).fadeOut('fast');//アニメーションが終わったら#loading_textをフェードアウト
});