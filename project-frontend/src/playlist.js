const BASE_URL = 'http://127.0.0.1:3001/playlists'
const SONG_URL = 'http://127.0.0.1:3001/songs'
const playlistList = document.getElementById('playlistList')

const playlistForm = `
<label>Playlist Name: </label>
<input id="playlistName" placeholder="Name"></input>
<input type="hidden" id="playlistId"></input>
`

class Playlist {
    constructor(data){
        this.id = data.id
        this.name = data.name
    }

    static newPlaylistForm(){
        let newPlaylistForm = document.getElementById('playlist-form')
        newPlaylistForm.innerHTML = `
        <form onsubmit="createPlaylist(); return false;">` +
        playlistForm +
        `<input type="submit" value="Create Playlist" >
        </form>
        <br> `  
    }

    static newSongForm(data){
        let newSongForm = document.getElementById('main')
        newSongForm.innerHTML += `
        <form onsubmit="createSong(); return false;">
                <label>Song Name: </label>
                    <input id="songName" placeholder="Name"></input>
                <label>Song Artist: </label>
                    <input id="artist" placeholder="Artist"></input>
                <label>Song Genre: </label>
                    <input id="genre" placeholder="Genre"></input>
                    <input type="hidden" id="songID"></input>
                <input type="hidden" id="${data}"></input>
                <input type="submit" value="Create Song">
        </form>
        <br> `  
    }

    playlistHTML = function() {
        return `<div class="card" playlist-id="${this.id}">
                <h3><strong class="playlist-name">${this.name}</strong></h3>
                <button class="playlist-songs">View Songs</button>
                <button class="delete-playlist-button">Delete Playlist</button> <br>
                </div>
        `
    }
}

function fetchPlaylists() {
    return fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
            showPlaylists(data)
            addEventListeners()
        })
}

function fetchPlaylist() {
    let playlistID = this.parentElement.getAttribute('playlist-id')

    return fetch(BASE_URL + `/${playlistID}`)
        .then(response => response.json())
        .then(data => {
            clearPage()
            showPlaylist(data)
            addEventListeners()
        })
}



function createPlaylist(){
    const makePlaylist = {
        name: document.getElementById('playlistName').value
    };

    fetch(BASE_URL, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(makePlaylist)
    }).then(res => res.json())
    .then(playlist => {
        fetchPlaylists()
        clearPage()
        Playlist.newPlaylistForm()
    });
}

function createSong(){
    const makeSong = {
        name: document.getElementById('songName').value,
        artist: document.getElementById('artist').value,
        genre: document.getElementById('genre').value,
        playlist_id: document.querySelector(".help").getAttribute('id')
    }

    fetch(SONG_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(makeSong)
    }).then(res => res.json())
    .then(song => {
        addSong(song)
        addEventListeners()
    })
}

function addSong(song){
    let main = document.querySelector(".help")
    let songCard = document.createElement("div")
    songCard.className = "card"
    songCard.setAttribute("song-id", song.id)

    songCard.innerHTML += `
    
    <h3> <strong class="songName">${song.name} by: </strong> </h3>
    <h3> <strong class="artist">${song.artist} </strong> </h3>
    <h3> <strong class="genre">${song.genre}</strong> </h3>
    <button class="delete-song-button">Delete Song</button> <br>
    `
    main.appendChild(songCard)
}

function deletePlaylist(){
    let playlistID = this.parentElement.getAttribute('playlist-id')

    fetch(BASE_URL + `/${playlistID}`, {
        method: 'DELETE'
    })
    .then(resp => resp.text())
    .then(json => {
        let chosenPlaylist = document.querySelector(`.card[playlist-id="${playlistID}"]`)
        chosenPlaylist.remove()
    })
}

function deleteSong(){
        let songId = this.parentElement.getAttribute('song-id')
        fetch( SONG_URL + `/${songId}`, {
            method: 'DELETE'
          })
          .then(resp => resp.text())
          .then(json => {
              let selectedEvent = document.querySelector(`.card[song-id="${songId}"]`) 
              selectedEvent.remove()
          })
}

function addEventListeners(){
    document.querySelectorAll(".playlist-songs").forEach(e => {
        e.addEventListener("click", fetchPlaylist)
    })

    document.querySelectorAll(".delete-playlist-button").forEach(e => {
        e.addEventListener("click", deletePlaylist)
    })

    document.querySelectorAll(".delete-song-button").forEach(e => {
        e.addEventListener("click", deleteSong)
    })
}

function clearPage() {
    let playlistIndex = document.getElementById("main")
    playlistIndex.innerHTML = ""
}

function showPlaylists(data){
    let playlistList = document.getElementById('playlist-list')

    data.forEach((playlist) => {
        let newPlaylist = new Playlist(playlist)

        const p = document.createElement('p')
        p.innerHTML += newPlaylist.playlistHTML()

        playlistList.appendChild(p)
    })
}

function showPlaylist(data){
    let main = document.getElementById("main")

    let playlistName = document.createElement('h1')
    playlistName.setAttribute('id', 'playlistname')
    playlistName.innerHTML += data.name
    main.appendChild(playlistName)

    let playlistDiv = document.createElement('div')
    playlistDiv.setAttribute("id", `${data.id}`)
    playlistDiv.className = "help"
    main.appendChild(playlistDiv)

    data.songs.forEach((song) =>{
        let newSong = new Song(song)

        const p = document.createElement('p') 
        p.innerHTML += newSong.playlistSongHTML()
        playlistDiv.appendChild(p)
    })
    let ID = data.id
    Playlist.newSongForm(ID)
}