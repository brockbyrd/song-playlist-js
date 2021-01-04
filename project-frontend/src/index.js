document.addEventListener('DOMContentLoaded', () => {
    fetchPlaylist()
})


function fetchPlaylist() {
    return fetch(BASE_URL)
        .then(response => response.json())
        .then(data => appendSongs(data))
        .catch(err => console.log(err))
}

function appendSongs(data){
    let songs = document.getElementById('songs');
    for (let i = 0; i < data.length; i++){
        var li = document.createElement("li");
        li.innerHTML = 'Name: ' + data[i].name;
        songs.appendChild(li);
    }
}

