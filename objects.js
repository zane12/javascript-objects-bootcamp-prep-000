<<<<<<< HEAD
var playlist = {someone:"something"}
=======
var playlist = {}
>>>>>>> 9a04943cbecc1a7be9765671728dcc1a304f24df


function updatePlaylist(playlist, artist, song){
  
<<<<<<< HEAD
  playlist[artist] = song
  return playlist
  
}

function removeFromPlaylist(playlist, artist) {
  
  delete playlist[artist]
  return playlist
=======
  return Object.assign({}, playlist, { [artist]:[song] })
  
>>>>>>> 9a04943cbecc1a7be9765671728dcc1a304f24df
}