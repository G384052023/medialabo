//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42'); 
let p = document.createElement('p');
p.textContent = '写真表の都市の緯度経度のページです' ;
p.style.textEmphasis='Sesame green' ;
h2.insertAdjacentElement('afterend',p);
// 練習4-3 写真表作成プログラム
let im = document.querySelector('div#phototable');
let p2 = document.createElement('p');
let taro = document.createElement('img');
taro.src='taro.png';
p2.insertAdjacentElement('beforeend',taro);
im.insertAdjacentElement('beforeend',p2);
let im3 = document.querySelector('div#phototable');
let p3 = document.createElement('p');
let jiro = document.createElement('img');
jiro.src='jiro.png';
p3.insertAdjacentElement('beforeend',jiro);
im.insertAdjacentElement('beforeend',p3);
let im4 = document.querySelector('div#phototable');
let p4 = document.createElement('p');
let hanako = document.createElement('img');
hanako.src='hanako.png';
p2.insertAdjacentElement('beforeend',hanako);
im.insertAdjacentElement('beforeend',p4);
// 練習4-4 箇条書き削除プログラム
let w = document.querySelectorAll('ul#location > li');
for (let i of w){
	i.remove();
}
// 練習4-5 箇条書き追加プログラム
let ka = document.querySelector('ul#location');
for (let i of data){
	let li = document.createElement('li');
	li.textContent = i.name+'... 経度：'+i.lat+'緯度：'+i.lng;
	ka.insertAdjacentElement('beforeend',li);
}