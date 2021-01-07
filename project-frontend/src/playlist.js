const BASE_URL = 'http://127.0.0.1:3001/playlists'
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
        clearPage()
        fetchPlaylists()
        Playlist.newPlaylistForm()
    });
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

function addEventListeners(){
    document.querySelectorAll(".playlist-songs").forEach(e => {
        e.addEventListener("click", fetchPlaylist)
    })

    document.querySelectorAll(".delete-playlist-button").forEach(e => {
        e.addEventListener("click", deletePlaylist)
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

    data.songs.forEach((song) =>{
        let newSong = new Song(song)

        const p = document.createElement('p')
        p.innerHTML += newSong.playlistSongHTML()
        main.appendChild(p)
    })
}