let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let counter = 1;
let flag = 0;
let yoso = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // kotae と yoso が一致するかどうか調べて結果を出力
    
    console.log(counter+'回目の予想：'+yoso);
  // 課題3-1: 正解判定する
    if (counter<4&&flag===0){
        if (yoso===kotae){
            console.log('おおおのれ！当てられてしもうた！');
            flag = flag+1;
        }
        else if (yoso<kotae){
            console.log('くくく、お主、小さいぞ！');
        }
        else {
            console.log('そんなに大きいわけがなかろう！');
        }
    }
    else if(counter>3&&flag===0){
        console.log('はっはっは!3回も当てられぬとは、お主の負けじゃの!');
    }
    else if(counter<3&&flag>0){
        console.log('何をしておるのだ？ゲームは終わっとるのじゃ。');
    }
    else{
        console.log('やっ、やめろうぅ、お主の勝ちじゃ、妾を虐めるでない！いやなのじゃぁぁぁああ');
    }
    counter = counter +1;
  // 課題3-1における出力先はコンソール
}