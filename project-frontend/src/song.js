const SONG_URL = 'http://127.0.0.1:3001/songs'

class Song{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.artist = data.artist
        this.genre = data.genre
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
        getSongs()
    })
}