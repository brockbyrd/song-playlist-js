const SONG_URL = 'http://127.0.0.1:3001/songs'

class Song{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.artist = data.artist
        this.genre = data.genre
    }

    playlistSongHTML = function() {
        return `<div class="card" song-id="${this.id}">
                <h3><strong class="song-name">${this.name} by: </strong></h3>
                <h3><strong class="song-name">${this.artist}</strong></h3>
                <h3><strong class="song-name">${this.genre}</strong></h3>
                <button class="delete-song-button">Delete Song</button> <br>
                </div>
        `
    }
}

function addSong(){
    const song = {
        name: document.getElementById('name').value,
        artist: document.getElementById('artist').value,
        genre: document.getElementById('genre').value
    }

    fetch(SONG_URL, {
        method: 'POST',
        body: JSON.stringify(song),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(song => {
        console.log(song)
        getPlaylist()
    });
}

