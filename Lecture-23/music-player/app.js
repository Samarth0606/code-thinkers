


let playBtn = document.querySelector('#play-btn')
let progress = document.querySelector('#progress')
let songList = document.querySelector('#song-list')

let songs  = [
    {
        name:"song1",
        id:1
    },
    {
        name:"song2",
        id:2
    },
    {
        name:"song3",
        id:3
    },
    {
        name:"song4",
        id:4
    }
]
// show all the songs ul
for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    li.classList.add('song-item')
    songList.append(li)
}


const audio = new Audio('./media/song1.mp3');

// play - pause btn

playBtn.addEventListener('click' , function(){
    audio.paused ? audio.play() : audio.pause()
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }else{
        playBtn.children[0].classList.add('fa-play')
        playBtn.children[0].classList.remove('fa-pause')
    }
})

// timeupdate
audio.addEventListener('timeupdate' , function(){
    let currentProgress = (audio.currentTime*100)/audio.duration;
    progress.value = currentProgress
})

// event(change)
progress.addEventListener('change' , function(){
    audio.currentTime =  audio.duration*progress.value/100
})


// khud se select kro gaana
songList.addEventListener('click' , function(e){
    let songId = e.target.getAttribute('id');
    audio.src = `./media/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play')
    playBtn.children[0].classList.add('fa-pause')
})


// task right and left click (id + , id -)

// ---------------------------------------------------
// assignment-3 (2 days -> friday-12baje raat ke)
// style it 
// do next and forward
// ---------------------------------------------------

