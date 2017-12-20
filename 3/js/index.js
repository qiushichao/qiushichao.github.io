function play(){
	var audio=document.getElementById('bg_music');
	if(audio.paused){
		audio.play();
	}
	else{
		audio.pause();
	}
}
function replay(){
	var audio=document.getElementById('bg_music');
	audio.currentTime=0;
}
function mOver(obj){
	obj.style.color="#FF0000"
}
function mOut(obj){
	obj.style.color="#FFFFFF"
}