const BASE_URL = 'http://127.0.0.1:3001/'
const playlistForm = document.getElementById('new-playlist')
const playlistList = document.getElementById('playlistList')

const playlistForm = `
<label>Playlist Name: </label>
<input id="playlistName" placeholder="Name"></input>
<input type="hidden" id="playlistId"></input>
`

class Playlist {
    constructor(data){
        this.name = data.name
    }

    static newPlaylistForm(){
        let newPlaylistForm = document.getElementById('playlist-form')
        newPlaylistForm.innerHTML = `
        <form onsubmit="createPlaylist(); return false;"> +
        playlistForm
        `
    }
}

function fetchPlaylists() {
    return fetch(BASE_URL + "playlists")
        .then(response => response.json())
        .then(json => showPlaylists(json))
}
fetchPlaylists();

function showPlaylists(data){
    const playlistList = document.getElementById('playlistList')
    data.forEach(playlist => {
        const li = document.createElement('li')
        li.innerHTML = 'Playlist: ' + playlist.name;
        playlistList.appendChild(li)
    })
}

function createPlaylist(event){
    const makePlaylist = {
        name: document.getElementById('name').value
    };

    fetch(BASE_URL + "playlists", { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(makePlaylist)
    }).then(res => res.json())
    .then(playlist => {
        showPlaylists(playlist)
        showPlaylists()
        Playlist.newPlaylistForm()
    });
}