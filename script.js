const YOUR_NAME = 'Pông';
const FILE_NAME = '78b1d42bf01a216ea8cea9569fe68da5.jpg';
var FILE_AUDIO = 'nana_ouyang_the_best_for_you_cover_ft_redza_3624858308691825042.mp3';

const $ = document.querySelector.bind(document);



(function() {
  const imgExtRegex = /(.jpg|.png|.jpeg)$/i;
  const fileType = imgExtRegex.test(FILE_NAME) ? 'image' : 'video';

  if(fileType === 'image') {
    $('.full-screen').style.background = `url(assets/${FILE_NAME})`;
    return;
  }

  const video = document.createElement('video');
  video.src = `assets/${FILE_NAME}`;
  video.volume =0.001;
  video.className = 'video';
  video.autoplay  = true;
  video.loop  = true;
  video.muted = true;

  $('.full-screen').appendChild(video);
  

  const then = new Date();
  let hour = then.getHours();
/*
  if (0 < hour <= 4){
    FILE_AUDIO = 'CN_001.mp3';
  }else if(4 < hour <= 8){
    FILE_AUDIO = 'CN_002.mp3';
  }else if(8 < hour <= 12){
    FILE_AUDIO = 'CN_011.mp3';
  }else if(12 < hour <= 16){
    FILE_AUDIO = 'CN_012.mp3';
  }else if(16 < hour <= 20){
    FILE_AUDIO = 'CN_025.mp3';
  }else{
    FILE_AUDIO = 'CN_036.mp3';
  }
*/  

  const audio = document.createElement('audio');
  audio.src = `assets/music/${FILE_AUDIO}`;
  audio.className = 'audio';
  audio.autoplay = true;
  audio.loop = true;

  $('.audioxr').appendChild(audio);

})();


/*
function calcTime() {
  const now = new Date();
  let ampm  = 'AM',
      sal   = ' ',
      hours = now.getHours(),
      mins  = now.getMinutes();

  hours > 12 && (sal = ' ');
  hours < 5 && (sal = ' ');
  hours > 18 && (sal = ' ');
  hours > 11 && hours < 24 && (ampm = 'PM');
  hours > 12 && (hours -= 12);
  hours < 10 && (hours = '0' + hours);
  mins  < 10 && (mins = '0' + mins);

  render(hours, mins, sal, ampm);
}

function render(hours, mins, sal, ampm) {
  $('.time').innerText = `${hours}:${mins}`;
  $('.ampm').innerText = ampm;
  $('.greetings').innerText = `${sal}`;
}

setInterval(calcTime, 500);
*/