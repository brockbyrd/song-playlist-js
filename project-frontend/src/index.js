

const BASE_URL = 'http://127.0.0.1:3001/'


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
        li.innerHTML = song.name
        songList.appendChild(li)
    })
}

// document.addEventListener('DOMContentLoaded', () => {
//     fetchPlaylist()
// })