window.onload = function () {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];
    //音乐停止，自动停止转盘效果
    audio.addEventListener('ended',function () {
        // music.style.animationPlayState = 'paused';
        music.childNodes[1].setAttribute('class','music_disc');
    },false);
    music.addEventListener('touchstart', function () {
        if(audio.paused){
            audio.play();
            // this.childNodes[1].style.animationPlayState = "running";
            // this.childNodes[1].style.webkitAnimationPlayState = "running";
            this.childNodes[1].setAttribute('class','music_disc music_play')
        }else{
            audio.pause();
            // this.childNodes[1].style.animationPlayState = "paused";
            // this.childNodes[1].style.webkitAnimationPlayState = "paused";
            this.childNodes[1].setAttribute('class','music_disc')
        }
    },false);

    page1.addEventListener('touchstart', function () {
        this.style.display = 'none';
        page2.style.display = 'block';
        setTimeout(function () {
            page2.setAttribute('class','page fadeout');
            page3.setAttribute('class','page fadein');

        },6000)
    },false);


    //流星雨
    var stars = document.getElementById('stars')
  // js随机生成流星
    for (var j=0;j<50;j++) {
    var newStar = document.createElement("div")
    newStar.className = "star"
    newStar.style.top = randomDistance(500, -100) + 'px'
    newStar.style.left = randomDistance(1300, 300) + 'px'
    stars.appendChild(newStar)
    }

    // 封装随机数方法
    function randomDistance (max, min) {
    var distance = Math.floor(Math.random() * (max - min + 1) + min)
    return distance
    } 

    var star = document.getElementsByClassName('star')

      // 给流星添加动画延时
      for (var i = 0, len = star.length; i < len; i++)
      {
        　　  star[i].style.animationDelay = i % 6 == 0 ? '0s' : i * 0.8 + 's'
    }
}

