var playlist = {"songName": "songTitle"};

updatePlaylist(playlistObject, artistName, songTitle){
  playlist.playlistObject= artistName: songTitle;
}

removeFromPlaylist(playlistObject, artistName){
  delete playlist.artistName;
}
