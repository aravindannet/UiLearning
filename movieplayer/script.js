const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//
function toggleVideoStatus()
{
    if(video.paused)
    {
        video.play();

    }
    else{
        video.pause();
        
    }
    updatePlayIcon();
}

//
function updatePlayIcon()
{
    if(video.paused)
    {
        play.innerHTML = '<i class = "fa fa-play fa-2x"></i>'
    }
    else{
        play.innerHTML = '<i class = "fa fa-pause fa-2x"></i>'
    }
        
}

//
function updateStopIcon()
{
    
}

//
function updateProgress()
{
    console.log(video.duration);
    console.log(video.currentTime);
    progress.value = (video.currentTime / video.duration) *100;

    //get minutes
    let min = Math.floor(video.currentTime /60);

    //Append 0 to get 00
    if(min < 10)
    {
        min = '0'+String(min);
    }

    let sec =  Math.floor(video.currentTime % 60)

    //Append 0
    if(sec <10)
    {
        sec = '0'+String(sec);
    }

    timestamp.innerHTML=`${min}:${sec}`;
}

//
function stopVideo()
{
    video.currentTime=0;
    video.pause();
    updatePlayIcon();
}

//
function setVideoProgress()
{
    video.currentTime =(progress.value * video.duration)/100;
    video.play();
    updatePlayIcon();
}

//Event Listeners
 video.addEventListener('click' , toggleVideoStatus);
 //video.addEventListener('play' , updatePlayIcon);
// video.addEventListener('pause' , updatePlayIcon);
 video.addEventListener('timeupdate',updateProgress);

 play.addEventListener('click' , toggleVideoStatus);
 stop.addEventListener('click' , stopVideo);
 progress.addEventListener('change' , setVideoProgress);
