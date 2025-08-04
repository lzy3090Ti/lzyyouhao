const musicPlayer = document.getElementById('musicPlayer');
const prevButton = document.getElementById('prevButton');
const playButton = document.getElementById('playButton');
const nextButton = document.getElementById('nextButton');
const musicList = document.getElementById('musicList');

// 模拟音乐列表数据，这里假设 10 首歌
const musicData = [
  { title: '我们的明天', src: '../zzhmusic/music/我们的明天.mp3' },
  { title: '安河桥', src: '../zzhmusic/music/安河桥.MP3' },
  { title: '半岛铁盒', src: '../zzhmusic/music/半岛铁盒.MP3' },
  { title: '本草纲目', src: '../zzhmusic/music/本草纲目.MP3' },
  { title: '春桥与志明', src: '../zzhmusic/music/春桥与志明.MP3' },
  { title: '稻香', src: '../zzhmusic/music/稻香.MP3' },
  { title: '反方向的钟', src: '../zzhmusic/music/反方向的钟.MP3' },
  { title: '风居住的街道', src: '../zzhmusic/music/风居住的街道.MP3' },
  { title: '搁浅', src: '../zzhmusic/music/搁浅.MP3' },
  { title: '给你呀', src: '../zzhmusic/music/给你呀.MP3' },
  { title: '还是会想你', src: '../zzhmusic/music/还是会想你.MP3' },

  { title: '红尘客栈', src: '../zzhmusic/music/红尘客栈.MP3' },
  { title: '虹之间', src: '../zzhmusic/music/虹之间.MP3' },
  { title: '简单爱', src: '../zzhmusic/music/简单爱.MP3' },
  { title: '菊花台', src: '../zzhmusic/music/菊花台.MP3' },
  { title: '开不了口', src: '../zzhmusic/music/开不了口.MP3' },
  { title: '兰亭序', src: '../zzhmusic/music/兰亭序.MP3' },
  { title: '搁浅', src: '../zzhmusic/music/搁浅.MP3' },
  { title: '暮色回响', src: '../zzhmusic/music/暮色回响.MP3' },

  { title: '年轮', src: '../zzhmusic/music/年轮.MP3' },
  { title: '七里香', src: '../zzhmusic/music/七里香.MP3' },
  { title: '青花瓷', src: '../zzhmusic/music/青花瓷.MP3' },
  { title: '晴天', src: '../zzhmusic/music/晴天.MP3' },
  { title: '若把你', src: '../zzhmusic/music/若把你.MP3' },
  { title: '溯', src: '../zzhmusic/music/溯.MP3' },
  { title: '听妈妈的话', src: '../zzhmusic/music/听妈妈的话.MP3' },
  { title: '我落泪情绪零碎', src: '../zzhmusic/music/我落泪情绪零碎.MP3' },


];

let currentSongIndex = 0;

function loadSong(index) {
  musicPlayer.src = musicData[index].src;
  musicPlayer.play();
}

function playPause() {
  if (musicPlayer.paused) {
    musicPlayer.play();
  } else {
    musicPlayer.pause();
  }
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex >= musicData.length) {
    currentSongIndex = 0;
  }
  loadSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = musicData.length - 1;
  }
  loadSong(currentSongIndex);
}

musicData.forEach(song => {
  const listItem = document.createElement('li');
  listItem.textContent = song.title;
  listItem.addEventListener('click', () => {
    const index = musicData.indexOf(song);
    currentSongIndex = index;
    loadSong(index);
  });
  musicList.appendChild(listItem);
});

playButton.addEventListener('click', playPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

loadSong(currentSongIndex);

musicPlayer.addEventListener('ended', () => {
    nextSong();
  });
  
  loadSong(currentSongIndex);