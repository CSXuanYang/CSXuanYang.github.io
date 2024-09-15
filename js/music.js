const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: 'Stay Alive',
        artist: 'José González',
        url: 'https://i.y.qq.com/v8/playsong.html?songid=5101868#webchat_redirect',
        cover: 'https://y.qq.com/n/ryqq/albumDetail/004KpmeA4Kch7o',
    }, 
	]
});

