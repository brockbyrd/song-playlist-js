const BASE_URL = 'http://127.0.0.1:3001/'
const songForm = document.getElementById('new-song')

function fetchPlaylist() {
    return fetch(BASE_URL + "playlists")
        .then(response => response.json())
        .then(json => showSongs(json))
}
fetchPlaylist();

function showSongs(songs){
    const songList = document.getElementById('songList')
    songs.forEach(song => {
        const li = document.createElement('li')
        li.innerHTML = 'Name: ' + song.name + ' by ' + song.artist
        songList.appendChild(li)
    })
}

const data = {
    songName,
    artist,
    genre
};

fetch(BASE_URL + "/playlists", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    console.log(data);
})

// document.addEventListener('DOMContentLoaded', () => {
//     fetchPlaylist()
// })