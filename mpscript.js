const playListContainerTag=document.getElementsByClassName("playListContainer")[0]
const audioTag=document.getElementsByClassName('audioTag')[0];
const durationDivText=document.getElementsByClassName("time")[0]
const currentProgressBar=document.getElementById("currentProgress")
const playButtonTag=document.getElementsByClassName("playButton")[0]
const pauseButtonTag=document.getElementsByClassName("pauseButton")[0]
const previousButtonTag=document.getElementsByClassName("previousButton")[0]
const nextButtonTag=document.getElementsByClassName("nextButton")[0];

const tracks=[
    {trackId:"music/music1.mp4", title:"Gfatt song 1"},
    {trackId:"music/music2.mp4", title:"Gfatt song 2"},
    {trackId:"music/music3.mp4", title:"Gfatt song 3"},
    {trackId:"music/music4.mp4", title:"Gfatt song 4"},
    {trackId:"music/music5.mp4", title:"Gfatt song 5"},
    {trackId:"music/music6.mp4", title:"Gfatt song 6"}
]

for (let i=0;i< tracks.length; i++){
    const trackTag=document.createElement("div")
    trackTag.addEventListener("click",()=>{
        currentPlayingIndex=i;
        playSong();
        
    })

    trackTag.classList.add("trackItem")

    const title=(i+1).toString()+". "+tracks[i].title
    trackTag.textContent=title;
    playListContainerTag.append(trackTag);

}
let duration=0;
let durationText="00:00";
audioTag.addEventListener("loadeddata", ()=>{
    duration= Math.floor(audioTag.duration)
    durationText=createMinuteSecondText(duration);

} )

audioTag.addEventListener("timeupdate",()=>{
    const currentTime= Math.floor(audioTag.currentTime)
    currentTimeText=createMinuteSecondText(currentTime);
    const currentAndTotalDuration=currentTimeText+" / "+durationText;
    
    durationDivText.textContent=currentAndTotalDuration;

    updateCurrentProgress(currentTime);


})
const updateCurrentProgress=(currentTime)=>{
    
    const progressWidth=(500/duration)*currentTime;
    currentProgressBar.style.width=progressWidth.toString()+"px";
}

const createMinuteSecondText=(totalSecond)=>{
    
    const minutes= Math.floor(totalSecond/60);

    const seconds=totalSecond%60;

    const minutetext= minutes<10 ? "0"+ minutes.toString() : minutes;
    const secondtext= seconds<10 ? "0"+seconds.toString() : seconds;
    return minutetext+":"+secondtext;
    
}

currentPlayingIndex=0;

let isplaying=false;

playButtonTag.addEventListener("click", ()=>{
    const currentTime=Math.floor(audioTag.currentTime)
    isplaying=true;
    if (currentTime === 0){
        playSong();
    }
    else{
        audioTag.play();
        updatePlayAndPause();
    }


})
pauseButtonTag.addEventListener("click",()=>{
    isplaying=false;
    audioTag.pause();
    updatePlayAndPause();
    
})

previousButtonTag.addEventListener("click",()=>{
    if(currentPlayingIndex==='0'){
        return;
    }
    currentPlayingIndex-=1;
    playSong()
    
})


nextButtonTag.addEventListener("click",()=>{
    if(currentPlayingIndex === tracks.length-1){
        return;
    }
    currentPlayingIndex+=1;
    playSong()
    
})
const playSong=()=>{
    const songIdtopaly=tracks[currentPlayingIndex].trackId;
    audioTag.src=songIdtopaly;
    audioTag.play();
    isplaying=true;
    updatePlayAndPause();
}


const updatePlayAndPause=()=>{
    if(isplaying){
        playButtonTag.style.display="none";
        pauseButtonTag.style.display="inline";

    }
    else{
        playButtonTag.style.display="inline";
        pauseButtonTag.style.display="none";
    }


}