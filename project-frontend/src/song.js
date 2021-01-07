const SONGS_URL = 'http://127.0.0.1:3001/songs'

class Song{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.artist = data.artist
        this.genre = data.genre
    }
}
