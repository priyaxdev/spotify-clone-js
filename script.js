console.log("mine first javascript huge level project not for all but for me at this time");
// searchbox effect

let searchBox=document.querySelector(".search-boxinner");
let searchbar=document.querySelector(".searchbar");
let searchIcon=document.querySelector(".search-icon");
searchBox.addEventListener("focus",() =>{
    searchbar.style.border="1px #E5E4E2 solid";
    searchIcon.style.color="#e5e4e2";
})
searchBox.addEventListener("blur",() => {
    searchbar.style.border="none";
    searchIcon.style.color="gray";
})


// left panel
// expand icon
let expand=document.querySelector(".expand");
let left=document.querySelector(".left");
expand.addEventListener("click", () => {
    console.log("clicked");
    left.classList.toggle("expanded");
})

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    let play = card.querySelector(".play");

    card.addEventListener("mouseenter", () => {
        play.classList.add("hovered");
    });

    card.addEventListener("mouseleave", () => {
        play.classList.remove("hovered");
    });
});



// main task of spotify
let currentSong=new Audio();

function formatTime(seconds) {
    seconds = Math.floor(seconds); // Round down to nearest second

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedMins = (hrs > 0 ? String(mins).padStart(2, '0') : mins);
    const formattedSecs = String(secs).padStart(2, '0');

    return hrs > 0 ? `${hrs}:${formattedMins}:${formattedSecs}` : `${formattedMins}:${formattedSecs}`;
}

async function getSongs() {
    
    let a=await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    // console.log(response);
    let div = document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")
    let songs=[]
    for(let index=0;index<as.length;index++){
        const element=as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs;
}

const playmusic=(track,pause=false)=>{
    // 
    currentSong.src="/songs/"+ track;
    if(!pause){
        currentSong.play();
        play.classList.remove("fa-circle-play");
        play.classList.add("fa-pause");
    }
    document.querySelector(".song-info").innerHTML=decodeURI(track);
    document.querySelector(".song-time").innerHTML="00:00/00:00"
}


let play=document.querySelector("#play");
async function main(){
    let songs=await getSongs();
    console.log(songs);
    playmusic(songs[0],true)

    let songUL =document.querySelector(".songList").getElementsByTagName("ul")[0]
    for(const song of songs){
        songUL.innerHTML=songUL.innerHTML + `<li>
                        <i class="fa-solid fa-music"></i>
                        <div class="info1">
                            <div class="song-name">${song.replaceAll("%20"," ").replaceAll("%26"," ")}</div>
                            <div class="song-artist">song artist</div>
                        </div>
                        <div class="play-now">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </li>`
    }
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e =>{
        e.addEventListener("click", element=>{
            console.log(e.querySelector(".info1").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info1").firstElementChild.innerHTML.trim())
        })
    })

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.classList.remove("fa-circle-play");
            play.classList.add("fa-pause");
        } else {
            currentSong.pause();
            play.classList.remove("fa-pause");
            play.classList.add("fa-circle-play");
        }
    });

    currentSong.addEventListener("timeupdate", ()=>{
        let percent = (currentSong.currentTime / currentSong.duration) * 100;

        document.querySelector(".song-time").innerHTML =`${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`;

        document.querySelector(".circle").style.left = percent + "%";
        document.querySelector(".seek-fill").style.width = percent + "%";
    });

    document.querySelector(".seekbar").addEventListener("click",e =>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;
        document.querySelector(".circle").style.left = percent +"%";
        document.querySelector(".seek-fill").style.width = percent +"%";
        currentSong.currentTime=((currentSong.duration)*percent)/100;
    })

}
main();