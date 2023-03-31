var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	video.load()
	video.autoplay = false
	video.loop = false
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function(){
	console.log("player1")
	video.play()
	volume = video.volume
	console.log(volume)
	document.querySelector("#volume").innerHTML = volume * 100 + "%"
	
})
document.querySelector("#pause").addEventListener("click", function(){
	video.pause()
})
		
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .10
	console.log(video.playbackRate)
})
		
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .10
	console.log(video.playbackRate) 
})
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10
	if (video.currentTime == video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true 
	this.innerHTML = "Unmute"
	}
		
	else if (video.muted == true) {
		video.muted = false
	this.innerHTML = "Mute"
	}
})

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = this.value + "%"
})
		
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
		
})
		
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

