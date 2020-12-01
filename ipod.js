// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];

function init() {

	for(var i = 1; i <7; i++){
		var num = i - 1;
    volLevels[i] = document.getElementById("vl" + num);
		if (i < 4){
			volLevels[i].style.backgroundColor = "purple";
		}
  }

}

function volUp() {

  for (var i = 1; i < 7; i++){
    if(volLevels[i].style.backgroundColor != "purple"){
      volLevels[i].style.backgroundColor = "purple";
      break;
    }
  }
  if(volLevels[6].style.backgroundColor == "purple") {
    return;
  }

}

function volDown() {

  for (var i = 6; i > 0; i--){
    if(volLevels[i].style.backgroundColor == "purple"){
      volLevels[i].style.backgroundColor = "";
      break;
    }
  }
  if(volLevels[1].style.backgroundColor == "") {
    return;
  }
}


function switchPlay() {
	let play = document.getElementById("playbutton");
	let html = `<i class="material-icons">pause</i>`;
	let orig_html = `<i class="material-icons">play_arrow</i>`;
	let elem = document.getElementById("player-time");
	let timeTochange = document.getElementById("time-elapsed");
	if (play) {

		if(document.getElementById("playbutton").innerHTML == orig_html){
			document.getElementById("playbutton").innerHTML = html;
			var updated_time = `${secondsToMs(elem.value)}`;
			var myVar = setInterval(myTimer, 1000);
			function myTimer() {
				updated_time = `${secondsToMs(elem.value)}`;
				document.getElementById("time-elapsed").innerHTML = updated_time;
				if (elem.value == 180){
					myStopFunction();
					nextSong();
				} else {
					elem.value++;
				}
				if (document.getElementById("playbutton").innerHTML == orig_html){
					myStopFunction();
				}
			}

			function myStopFunction() {
			  clearInterval(myVar);
			}
		}
		else {
			document.getElementById("playbutton").innerHTML = orig_html;
		}
	}
}



function nextSong() {
let current_song = document.getElementById("player-song-name");
let elem = document.getElementById("player-time");
var current_song_name = current_song.innerHTML;
for(var m = 0; m < 10; m++){
	if(tracklist[m] == current_song_name){
		if(m == 9){
			document.getElementById("player-song-name").innerHTML = tracklist[0];
			elem.value = 0;
			document.getElementById("time-elapsed").innerHTML = `0:00`;
		}
		else {
			document.getElementById("player-song-name").innerHTML = tracklist[m+1];
			elem.value = 0;
			document.getElementById("time-elapsed").innerHTML = `0:00`;
		}
	}
}
}


function prevSong() {
	let current_song = document.getElementById("player-song-name");
	let elem = document.getElementById("player-time");
	var current_song_name = current_song.innerHTML;
	for(var m = 0; m < 10; m++){
		if(tracklist[m] == current_song_name){
			if(m == 0){
				document.getElementById("player-song-name").innerHTML = tracklist[9];
				elem.value = 0;
				document.getElementById("time-elapsed").innerHTML = `0:00`;
			}
			else {
				document.getElementById("player-song-name").innerHTML = tracklist[m-1];
				elem.value = 0;
				document.getElementById("time-elapsed").innerHTML = `0:00`;
			}
		}
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
