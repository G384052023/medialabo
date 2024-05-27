let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let counter = 1;
let flag = 0;
let yoso = 0;
let text = document.querySelector('p#result');
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b1 = document.querySelector('button#print');
b1.addEventListener('click', hentai);

// ボタンを押した後の処理をする関数 hantei() の定義
function hentai() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // kotae と yoso が一致するかどうか調べて結果を出力

    let i = document.querySelector('input[name="num"]');
    yoso = i.value;
    console.log(counter+'回目の予想：'+yoso);
    let count = document.querySelector('span#kaisu');
    let yosoanswer = document.querySelector('span#answer');
    count.textContent = counter;
    yosoanswer.textContent = yoso;

  // 課題3-1: 正解判定する
    if (counter<4&&flag===0){
        if (yoso > kotae){
            console.log(yoso+'? そんなに大きいわけがなかろう！');
            text.textContent = yoso+'? そんなに大きいわけがなかろう！';
        }
        else if (yoso<kotae){
            console.log(yoso+'? くくく、お主、小さいぞ！');
            text.textContent = yoso+'? くくく、お主、小さいぞ！';
        }
        else {
            console.log('おおおのれ！当てられてしもうた！');
            text.textContent = 'おおおのれ！当てられてしもうた！';
            flag = flag+1;       
        }
    }
    else if(counter>3&&flag===0){
        console.log('はっはっは!3回も当てられぬとは、お主の負けじゃの!もうゲームは終わっとるのじゃぞ？');
        text.textContent = 'はっはっは!3回も当てられぬとは、お主の負けじゃの!もうゲームは終わっとるのじゃぞ？';
    }
    else if(counter<3&&flag>0){
        console.log('何をしておるのだ？ゲームは終わっとるのじゃ。');
        text.textContent = '何をしておるのだ？ゲームは終わっとるのじゃ。';
    }
    else{
        console.log('やっ、やめろうぅ、お主の勝ちじゃ、妾を虐めるでない！いやなのじゃぁぁぁああ');
        text.textContent = 'やっ、やめろうぅ、お主の勝ちじゃ、妾を虐めるでない！いやなのじゃぁぁぁああ';
    }
    counter = counter +1;
  // 課題3-1における出力先はコンソール
}