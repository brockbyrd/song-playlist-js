const BASE_URL = 'http://127.0.0.1:3001/'
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
}

function fetchPlaylists() {
    return fetch(BASE_URL + "playlists")
        .then(response => response.json())
        .then(data => showPlaylists(data))
}

Playlist.prototype.playlistHTML = function() {
    return `<div class="card" data-playlist-id="${this.id}">
            <strong class="playlist-name">${this.name}</strong> <br>
            </div>
    `
}

function createPlaylist(){
    const makePlaylist = {
        name: document.getElementById('playlistName').value
    };

    fetch(BASE_URL + "playlists", { 
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

function clearPage() {
    let playlistIndex = document.getElementById("playlist-list")
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