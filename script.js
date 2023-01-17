console.log("Welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('6.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let nowplaying = document.getElementById('nowplaying');

let songs=[
    {songName:"Divinity", filePath:"1.mp3", coverPath:"cover1.jpg"},
    {songName:"Wait", filePath:"2.mp3", coverPath:"cover2.jpg"},
    {songName:"Good things fall apart", filePath:"3.mp3", coverPath:"cover3.jpg"},
    {songName:"Past Lives", filePath:"4.mp3", coverPath:"cover4.jpg"},
    {songName:"The night we met", filePath:"5.mp3", coverPath:"cover5.jpg"},
    {songName:"After hours", filePath:"6.mp3", coverPath:"cover6.png"},
    {songName:"Starboy", filePath:"7.mp3", coverPath:"cover7.png"},
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//play song
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress; 

})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})
const makeAllplay=()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplay(); 
        gif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        nowplaying.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
      
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    
    }
    audioElement.src = `${songIndex+1}.mp3`;
    nowplaying.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
}
)

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    
    }
    audioElement.src = `${songIndex+1}.mp3`;
    nowplaying.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
}
)