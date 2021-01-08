const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外の気温は華氏5度でとても暑かったです。:insertx:はその日、海で:inserty:を拾いました。名前をボブと名付けました。とても:insertz:な子でした。:insertx:は幸せに暮らしました。';
let insertX = ['おじいさん','おばあさん','おじいさんとおばあさん'];
let insertY = ['クラゲ','サメ','クジラ'];
let insertZ = ['活発','好奇心旺盛','ポジティブ'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ',name);
  }

  if(document.getElementById("jp").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  '摂氏' + Math.round((94-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏5度',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
