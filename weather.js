

let citydata=[
  ["Cairo",360630,'sunny.jpg'],
  ["Moscow",524901,'cloud-cloudy.jpg'],
  ["Johannesburg",993800,'層積雲.png'],
  ["Beijing",1816670,'層積雲.png'],
  ["Tokyo",1850147,'層積雲.png'],
  ["Singapore",1880252,'層積雲.png'],
  ["Sydney",2147714,'Rain.jpg'],
  ["London",2643743,'層積雲.png'],
  ["Paris",2968815,'霧.webp'],
  ["Rio de Janeiro",3451189,'cloud-cloudy.jpg'],
  ["New York",5128581,'cloud-cloudy.jpg'],
  ["Los Angeles",5368361,'層積雲.png'],
  ]


// let b = document.querySelector('#sendRequest0');
// b.addEventListener('click', sendRequest);
let b1 = document.querySelector('#sendRequest1');
b1.addEventListener('click', function(){
  sendRequest(1);
});
let b2 = document.querySelector('#sendRequest2');
b2.addEventListener('click', function(){
  sendRequest(2);
});
let b3 = document.querySelector('#sendRequest3');
b3.addEventListener('click', function(){
  sendRequest(3);
});
let b4 = document.querySelector('#sendRequest4');
b4.addEventListener('click', function(){
  sendRequest(4);
});
let b5 = document.querySelector('#sendRequest5');
b5.addEventListener('click', function(){
  sendRequest(5);
});
let b6 = document.querySelector('#sendRequest6');
b6.addEventListener('click', function(){
  sendRequest(6);
});
let b7 = document.querySelector('#sendRequest7');
b7.addEventListener('click', function(){
  sendRequest(7);
});
let b8 = document.querySelector('#sendRequest8');
b8.addEventListener('click', function(){
  sendRequest(8);
});
let b9 = document.querySelector('#sendRequest9');
b9.addEventListener('click', function(){
  sendRequest(9);
});
let b10 = document.querySelector('#sendRequest10');
b10.addEventListener('click', function(){
  sendRequest(10);
});
let b11 = document.querySelector('#sendRequest11');
b11.addEventListener('click', function(){
  sendRequest(11);
});
let b12 = document.querySelector('#sendRequest12');
b12.addEventListener('click', function(){
  sendRequest(12);
});
var body = document.querySelector('body');



function changeBackground(backgroundUrl) {
  body.style.backgroundImage = 'url(' + backgroundUrl + ')';
}


function sendRequest(n) {
  // URL を設定

  // let i = document.querySelector('input[name="ads"]');
  let i = n;
  // let Cid = citydata[i.value-1][1];
  let Cid = citydata[i-1][1];
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+Cid+'.json';
  
  changeBackground(citydata[i-1][2]);

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }


console.log('情報     '+data.base);
console.log('経度   '+data.coord.lon);
let keido = document.querySelector('td#keido');
keido.textContent = data.coord.lon;
console.log('緯度   '+data.coord.lat);
let ido = document.querySelector('td#ido');
ido.textContent = data.coord.lat;
console.log('天気   '+data.weather[0].description);
let tenki = document.querySelector('td#tenki');
tenki.textContent = data.weather[0].description;
console.log('最低気温   '+data.main.temp_min);
let saitei = document.querySelector('td#saitei');
saitei.textContent = data.main.temp_min;
console.log('最高気温   '+data.main.temp_max);
let saikou = document.querySelector('td#saikou');
saikou.textContent = data.main.temp_max;
console.log('湿度   '+data.main.humidity);
let ondo = document.querySelector('td#ondo');
ondo.textContent = data.main.humidity;
console.log('風速   '+data.wind.speed);
let fuusoku = document.querySelector('td#fuusoku');
fuusoku.textContent = data.wind.speed;
console.log('風向   '+data.wind.deg);
let fuukou = document.querySelector('td#fuukou');
fuukou.textContent = data.wind.deg;
console.log('都市名:'+data.name);
let city = document.querySelector('span#city');
city.textContent = data.name;

  // data をコンソールに出力
  //console.log(data);

  // data.x を出力
  //console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}


// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };





// console.log('情報     '+data.base);
// console.log('経度   '+data.coord.lon);
// let keido = document.querySelector('td#keido');
// keido.textContent = data.coord.lon;
// console.log('緯度   '+data.coord.lat);
// let ido = document.querySelector('td#ido');
// ido.textContent = data.coord.lat;
// console.log('天気   '+data.weather[0].description);
// let tenki = document.querySelector('td#tenki');
// tenki.textContent = data.weather[0].description;
// console.log('最低気温   '+data.main.temp_min);
// let saitei = document.querySelector('td#saitei');
// saitei.textContent = data.main.temp_min;
// console.log('最高気温   '+data.main.temp_max);
// let saikou = document.querySelector('td#saikou');
// saikou.textContent = data.main.temp_max;
// console.log('湿度   '+data.main.humidity);
// let ondo = document.querySelector('td#ondo');
// ondo.textContent = data.main.humidity;
// console.log('風速   '+data.wind.speed);
// let fuusoku = document.querySelector('td#fuusoku');
// fuusoku.textContent = data.wind.speed;
// console.log('風向   '+data.wind.deg);
// let fuukou = document.querySelector('td#fuukou');
// fuukou.textContent = data.wind.deg;
// console.log('都市名:'+data.name);
// let keido = document.querySelector('td#keido');
// keido.textContent = data.name;
