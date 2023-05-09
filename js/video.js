
  const visualVideo = document.querySelectorAll(".main_visual_video>li");
  const myVideo = document.querySelectorAll(".main_visual>ul>li>video");
  const visualBtn = document.querySelectorAll(".video_page");
  const playBtn = document.querySelector(".play_btn>a");
  const visualNews = document.querySelector(".news");
  const visualNewsBtn = document.querySelector(".news_tit");
  const videoProgress = document.querySelectorAll(".pagination>ul>li>a>span.progress");

  function activVideo(i, value) {
    for (let el of value) {
      el.pause();
      el.currentTime = 0;
    }
    value[i].play();
  }


  function activation(i, value) {
    for (let el of value) {
      el.style.display = "none";
    }
    value[i].style.display = "block";
  }

  function activationOn(i, value) {
    for (let el of value) {
      el.classList.remove("on");
    }
    value[i].classList.add("on");
  }

  window.onload = function () {
    let nowPlaying = 0;
    let visualInterval = null;

    function playNextVideo() {
      if (nowPlaying === myVideo.length - 1) {
        nowPlaying = 0;
      } else {
        nowPlaying++;
      }
      activVideo(nowPlaying, myVideo);
      activationOn(nowPlaying, visualVideo);
      activationOn(nowPlaying, videoProgress);
    }

    function playVisual() {
      let leftTime = myVideo[nowPlaying].duration - myVideo[nowPlaying].currentTime;
      if (leftTime <= 0) {
        playNextVideo();
        leftTime = myVideo[nowPlaying].duration;
      }
      visualInterval = setTimeout(playVisual, leftTime * 1000);
    }

    myVideo.forEach(video => {
      video.addEventListener('loadedmetadata', () => {
        if (visualInterval === null) {
          visualInterval = setTimeout(playVisual, myVideo[nowPlaying].duration * 1000);
        }
      });
    });

    visualBtn.forEach((item, idx) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        clearInterval(visualInterval);
        activVideo(idx, myVideo)
        activationOn(idx, visualVideo);
        activationOn(idx, videoProgress);

        nowPlaying = idx;

        let remainingTime = myVideo[nowPlaying].duration - myVideo[nowPlaying].currentTime;
        visualInterval = setInterval(playNextVideo, remainingTime * 1000);

      });
    });


    playBtn.addEventListener('click', function (e) {
      e.preventDefault();
      playBtn.classList.toggle('on');
      if (playBtn.classList.contains('on')) {
        clearInterval(visualInterval);
      } else {
        let totalDuration = myVideo[nowPlaying].duration;
        let currentTime = myVideo[nowPlaying].currentTime;
        let remainingTime = totalDuration - currentTime;
        if (remainingTime > 0) {
          visualInterval = setInterval(playVisual, remainingTime * 1000);
        } else {
          playVisual();
          visualInterval = setInterval(playVisual, myVideo[nowPlaying].duration * 1000);
        }
      }
    });


  };

  visualNews.addEventListener("click", () => {
    visualNews.classList.add("on");
  })

  window.addEventListener("scroll", () => {
    visualNews.classList.remove("on");
  })