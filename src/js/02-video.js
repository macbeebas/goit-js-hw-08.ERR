import Player from '@vimeo/player';
// import _ from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

var _ = require('lodash');
//
// localStorage.clear();

if (localStorage.getItem('videoplayer-current-time') != null) {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', _.throttle((timer) => {
    localStorage.setItem('videoplayer-current-time', timer.seconds);
}, 1000));
    // localStorage.setItem('videoplayer-current-time', timer.seconds);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
