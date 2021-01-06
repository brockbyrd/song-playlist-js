document.addEventListener("DOMContentLoaded", () => {
    showPlaylists();
    Playlist.newPlaylistForm();
})
function toggleHideDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}