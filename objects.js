var playlist = {"songName": "songTitle"};

function updatePlaylist(playlistObject, artistName, songTitle) {
  playlist = {artistName: ${songTitle}};
}

function removeFromPlaylist(playlistObject, artistName){
  delete playlist.artistName;
}
