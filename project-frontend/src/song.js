class Song{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.artist = data.artist
        this.genre = data.genre
        this.playlist_id = data.playlist_id
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
