const playListContainerTag=document.getElementsByClassName("playListContainer")[0]
const audioTag=document.getElementsByClassName('audioTag')[0];

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
        const trackId=tracks[i].trackId;
        audioTag.src=trackId;
        audioTag.play();
        
    })

    trackTag.classList.add("trackItem")
    const title=(i+1).toString()+". "+tracks[i].title
    trackTag.textContent=title;
    playListContainerTag.append(trackTag);

}

audioTag.addEventListener("loadeddata", ()=>{
    console.log("current track ", audioTag.duration)
} )