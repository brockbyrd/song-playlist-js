const BASE_URL = 'http://127.0.0.1:3001/'
const playlistForm = document.getElementById('new-playlist')
const playlistList = document.getElementById('playlistList')

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
    event.preventDefault();

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
    .then(playlist => showPlaylists(playlist))
    .catch(error => console.log('ERROR'))

}

playlistForm.addEventListener("submit", createPlaylist);