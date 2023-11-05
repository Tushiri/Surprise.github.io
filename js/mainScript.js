// welcome text effect + the scroll down thing logic
const track = document.getElementById("image-track");
const blob = document.getElementById("blob");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let interval1 = null;

document.querySelector("h3").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
	event.target.innerText = event.target.innerText
	  .split("")
	  .map((letter, index) => {
		if(index < iteration) {
		  return event.target.dataset.value[index];
		}
	  
		return letters[Math.floor(Math.random() * 26)]
	  })
	  .join("");
	
	if(iteration >= event.target.dataset.value.length){ 
	  clearInterval(interval);
	}
	
	iteration += 1 / 3;
  }, 30);
}

document.querySelector("h2").onmouseover = event => {  
  let iteration1 = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
	event.target.innerText = event.target.innerText
	  .split("")
	  .map((letter, index) => {
		if(index < iteration1) {
		  return event.target.dataset.value[index];
		}
	  
		return letters1[Math.floor(Math.random() * 26)]
	  })
	  .join("");
	
	if(iteration1 >= event.target.dataset.value.length){ 
	  clearInterval(interval1);
	}
	
	iteration1 += 1 / 3;
  }, 5);
}

document.querySelector("h2").onmouseout = event => {  
  let iteration1 = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
	event.target.innerText = event.target.innerText
	  .split("")
	  .map((letter, index) => {
		if(index < iteration1) {
		  return "scroll DOWN to continue"[index];
		}
	  
		return letters1[Math.floor(Math.random() * 26)]
	  })
	  .join("");
	
	if(iteration1 >= event.target.dataset.value.length){ 
	  clearInterval(interval1);
	}
	
	iteration1 += 1 / 3;
  }, 10);
}

// mouse pointer blob logic
document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
	left: `${clientX}px`,
	top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// img track logic
window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
		maxDelta = window.innerWidth;
  
  const percentage = (mouseDelta / maxDelta) * -100,
		nextPercentageU = parseFloat(track.dataset.prevPercentage) + percentage, 
		nextPercentage = Math.max(Math.min(nextPercentageU, -20), -80);
  
  track.dataset.percentage = nextPercentage;

  track.animate({
	transform: `translate(${nextPercentage}%, -50%)`}, {duration:1200, fill: "forwards"});
  
  
  for (const image of track.getElementsByClassName("image")) {
	image.animate({
	  objectPosition: `${80 + nextPercentage}% center`
	}, { duration: 1200, fill: "forwards"});
  };

}

// slides logic   

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
		
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
	nextSlide.dataset.status = "active";
	activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
	nextSlide.dataset.status = "active";
	activeIndex = nextIndex;
  });
}

// color text love
const love = document.querySelector(".activation");

love.onmouseenter = () => {
var r = document.querySelector(':root');


// Create a function for setting a variable value

  r.style.setProperty('--red', '#cc0000');
  r.style.setProperty('--darkPink', '#ff4d4d');
  r.style.setProperty('--pink', '#ff8080');
  r.style.setProperty('--fourDefaultBg', 'white')
}

love.onmouseleave = onMouseLeave = () => {
  var r = document.querySelector(':root');
  
  r.style.setProperty('--red', 'white');
  r.style.setProperty('--darkPink', 'white');
  r.style.setProperty('--pink', 'white');
  r.style.setProperty('--fourDefaultBg', '#393631')
}

// music card1
const subtitle1 = document.getElementsByClassName("card-subtitle1")[0];

const createWord1 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word1");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord1 = (text, index) => subtitle1.appendChild(createWord1(text, index));

const createSubtitle1 = text => text.split(" ").map(addWord1);

createSubtitle1("The very first song that we sang together and the very first song that I learned to play on the ukulele.");


// music card2
const subtitle2 = document.getElementsByClassName("card-subtitle2")[0];

const createWord2 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word2");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord2 = (text, index) => subtitle2.appendChild(createWord2(text, index));

const createSubtitle2 = text => text.split(" ").map(addWord2);

createSubtitle2("The Band you loved the most (except SB19 (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)).");


// music card3
const subtitle3 = document.getElementsByClassName("card-subtitle3")[0];

const createWord3 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word3");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord3 = (text, index) => subtitle3.appendChild(createWord3(text, index));

const createSubtitle3 = text => text.split(" ").map(addWord3);

createSubtitle3("The song that became my favorite because it reminds me of you.");

// modal work for welcome
document.getElementById("mainWel").style.cursor = "pointer";

document.getElementById("mainWel").addEventListener("click",function(){
  document.getElementById("mainWel").style.display = "none";
  document.getElementsByClassName("popup")[0].classList.add("active");
});
 
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementById("mainWel").style.display = "block";
  document.getElementsByClassName("popup")[0].classList.remove("active");
});
// modal work ends

// music player fr
const content = document.querySelector(".content"),
Playimage = content.querySelector(".music-image img"),
musicName = content.querySelector(".music-titles .name"),
musicArtist = content.querySelector(".music-titles .artist"),
Audio = document.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),
prevBtn = content.querySelector("#prev"),
nextBtn = content.querySelector("#next"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector(".progress-details")

let index = 1;

window.addEventListener("load", ()=>{
  loadData(index);
});

function loadData(indexValue){
  musicName.innerHTML= songs[indexValue - 1].name;
  musicArtist.innerHTML = songs[indexValue - 1].artist;
  Playimage.src = "assets/song cover/"+songs[indexValue - 1].img+".jpg";
  Audio.src = "assets/Songs/"+songs[indexValue - 1].audio+".mp3";
}

playBtn.addEventListener("click", ()=>{
  const isMusicPaused = content.classList.contains("paused");
  if(isMusicPaused){
	pauseSong();
  }
  else{
	playSong();
  }
});

function playSong(){
  content.classList.add("paused");
  playBtnIcon.innerHTML = "pause";
  Audio.play();
}

function pauseSong(){
  content.classList.remove("paused");
  playBtnIcon.innerHTML = "play_arrow";
  Audio.pause();
}

nextBtn.addEventListener("click", ()=>{
  nextSong();
});

prevBtn.addEventListener("click", ()=>{
  prevSong();
});

function nextSong(){
  index++;
  if(index > songs.length){
	index = 1;
  }
  else{
	index = index;
  }
  loadData(index);
  playSong();
}

function prevSong(){
  index--;
  if(index <= 0){
	index = songs.length;
  }
  else{
	index = index;
  }
  loadData(index);
  playSong();
}

Audio.addEventListener("timeupdate", (e)=>{
  const initialTime = e.target.currentTime; // Get current music time
  const finalTime = e.target.duration; // Get music duration
  let BarWidth = (initialTime / finalTime) * 100;
  progressBar.style.width = BarWidth+"%";

  progressDetails.addEventListener("click", (e)=>{
	let progressValue = progressDetails.clientWidth; // Get width of Progress Bar
	let clickedOffsetX = e.offsetX; // get offset x value
	let MusicDuration = Audio.duration; // get total music duration

	Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
  });

  //Timer Logic
  Audio.addEventListener("loadeddata", ()=>{
	let finalTimeData = content.querySelector(".final");

	//Update finalDuration
	let AudioDuration = Audio.duration;
	let finalMinutes = Math.floor(AudioDuration / 60);
	let finalSeconds = Math.floor(AudioDuration % 60);
	if(finalSeconds < 10){
	  finalSeconds = "0"+finalSeconds;
	}
	finalTimeData.innerText = finalMinutes+":"+finalSeconds;
  });

  //Update Current Duration
  let currentTimeData = content.querySelector(".current");
  let CurrentTime = Audio.currentTime;
  let currentMinutes = Math.floor(CurrentTime / 60);
  let currentSeconds = Math.floor(CurrentTime % 60);
  if(currentSeconds < 10){
	currentSeconds = "0"+currentSeconds;
  }
  currentTimeData.innerText = currentMinutes+":"+currentSeconds;

});

Audio.addEventListener("ended", ()=>{
  index++;
  if(index > songs.length){
	index = 1;
  }
  loadData(index);
  playSong();
});

// card selector logic
document.getElementById("song1").addEventListener("click",function(){
  index = 1;
  loadData(index);
  playSong();
});

document.getElementById("song2").addEventListener("click",function(){
  index = 2;
  loadData(index);
  playSong();
});

document.getElementById("song3").addEventListener("click",function(){
  index = 3;
  loadData(index);
  playSong();
});

// music player ends


// maze game logic
const cont = document.getElementById("container");
const maze = document.getElementById("maze");
const thingie = document.getElementById("thingie");
const home = document.getElementById("home");
const emo = document.getElementById("emo");

const bu = document.getElementById("bu");
const bd = document.getElementById("bd");
const bl = document.getElementById("bl");
const br = document.getElementById("br");

const step = 20;
const size = 20;
const bwidth = 2;
const mazeHeight = 200;
const mazeWidth = 300;
let nogoX = [];
let nogoX2 = [];
let nogoY = [];
let nogoY2 = [];
let prevDist = mazeWidth * 2;


//generate sides and starting position
genSides();

//define size
let my = mazeHeight / step;
let mx = mazeWidth / step;

//create full grid
let grid = [];
for (let i = 0; i < my; i++) {
	let sg = [];
	for (let a = 0; a < mx; a++) {
		sg.push({ u: 0, d: 0, l: 0, r: 0, v: 0 });
	}
	grid.push(sg);
}

//create direction arrays
let dirs = ["u", "d", "l", "r"];
let modDir = {
	u: { y: -1, x: 0, o: "d" },
	d: { y: 1, x: 0, o: "u" },
	l: { y: 0, x: -1, o: "r" },
	r: { y: 0, x: 1, o: "l" }
};

//generate maze
genMaze(0, 0, 0);
drawMaze();

//get all the barriers
const barriers = document.getElementsByClassName("barrier");
for (let b = 0; b < barriers.length; b++) {
	nogoX.push(barriers[b].offsetLeft);
	nogoX2.push(barriers[b].offsetLeft + barriers[b].clientWidth);
	nogoY.push(barriers[b].offsetTop);
	nogoY2.push(barriers[b].offsetTop + barriers[b].clientHeight);
}
//console.log(nogoX, nogoX2, nogoY, nogoY2);

document.addEventListener("keydown", keys);

function keys(e) {
	let code = e.code;
	switch (code) {
		//wasd
		case "KeyW":
			up();
			break;
		case "KeyS":
			down();
			break;
		case "KeyA":
			left();
			break;
		case "KeyD":
			right();
			break;
	}
}

bu.addEventListener("click", (e) => {
	up();
	firstMove = true;
});
bd.addEventListener("click", (e) => {
	down();
	firstMove = true;
});
bl.addEventListener("click", (e) => {
	left();
	firstMove = true;
});
br.addEventListener("click", (e) => {
	right();
	firstMove = true;
});

function up() {
	animKeys(bu);
	if (checkYboundry("u")) {
		thingie.style.top = thingie.offsetTop - step + "px";
		updateEmo(false);
	}
}

function down() {
	animKeys(bd);
	if (checkYboundry("d")) {
		thingie.style.top = thingie.offsetTop + step + "px";
		updateEmo(false);
	}
}

function left() {
	animKeys(bl);
	if (checkXboundry("l")) {
		thingie.style.left = thingie.offsetLeft - step + "px";
	}
	updateEmo(true);
}

function right() {
	animKeys(br);
	if (checkXboundry("r")) {
		thingie.style.left = thingie.offsetLeft + step + "px";
	}
	updateEmo(true);
}

//check if one can move horizontally
function checkXboundry(dir) {
	let x = thingie.offsetLeft;
	let y = thingie.offsetTop;
	let ok = [];
	let len = Math.max(nogoX.length, nogoX2.length, nogoY.length, nogoY2.length);

	let check = 0;
	for (let i = 0; i < len; i++) {
		check = 0;
		if (y < nogoY[i] || y > nogoY2[i] - size) {
			check = 1;
		}
		if (dir === "r") {
			if (x < nogoX[i] - size || x > nogoX2[i] - size) {
				check = 1;
			}
		}
		if (dir === "l") {
			if (x < nogoX[i] || x > nogoX2[i]) {
				check = 1;
			}
		}
		ok.push(check);
	}
	//check what to return
	let res = ok.every(function (e) {
		return e > 0;
	});
	return res;
}

//check if one can move vertically
function checkYboundry(dir) {
	let x = thingie.offsetLeft;
	let y = thingie.offsetTop;
	let ok = [];
	let len = Math.max(nogoX.length, nogoX2.length, nogoY.length, nogoY2.length);

	let check = 0;
	for (let i = 0; i < len; i++) {
		check = 0;
		if (x < nogoX[i] || x > nogoX2[i] - size) {
			check = 1;
		}
		if (dir === "u") {
			if (y < nogoY[i] || y > nogoY2[i]) {
				check = 1;
			}
		}
		if (dir === "d") {
			if (y < nogoY[i] - size || y > nogoY2[i] - size) {
				check = 1;
			}
		}
		ok.push(check);
	}
	//check what to return
	let res = ok.every(function (e) {
		return e > 0;
	});
	return res;
}

//generate sides with random entry and exit points
function genSides() {
	let max = mazeHeight / step;
	let l1 = Math.floor(Math.random() * max) * step;
	//let l1 = 0;
	let l2 = mazeHeight - step - l1;
	//console.log(l1, l2);

	let lb1 = document.createElement("div");
	lb1.style.top = step + "px";
	lb1.style.left = step + "px";
	lb1.style.height = l1 + "px";

	let lb2 = document.createElement("div");
	lb2.style.top = l1 + step * 2 + "px";
	lb2.style.left = step + "px";
	lb2.style.height = l2 + "px";

	let rb1 = document.createElement("div");
	rb1.style.top = step + "px";
	rb1.style.left = mazeWidth + step + "px";
	rb1.style.height = l2 + "px";

	let rb2 = document.createElement("div");
	rb2.style.top = l2 + step * 2 + "px";
	rb2.style.left = mazeWidth + step + "px";
	rb2.style.height = l1 + "px";

	//create invisible barriers for start and end: vertical left, vertical right, left top, left bottom, right top, right bottom
	nogoX.push(0, mazeWidth + 2 * step, 0, 0, mazeWidth + step, mazeWidth + step);
	nogoX2.push(
		0 + bwidth,
		mazeWidth + 2 * step + bwidth,
		step,
		step,
		mazeWidth + 2 * step,
		mazeWidth + 2 * step
	);
	nogoY.push(
		l1 + step,
		l2 + step,
		l1 + step,
		l1 + 2 * step,
		l2 + step,
		l2 + 2 * step
	);
	nogoY2.push(
		l1 + 2 * step,
		l2 + 2 * step,
		l1 + step + bwidth,
		l1 + 2 * step + bwidth,
		l2 + step + bwidth,
		l2 + 2 * step + bwidth
	);
	//set start-pos
	thingie.style.top = l1 + step + "px";
	thingie.style.left = 0 + "px";
	//set end-pos & store height of end
	home.style.top = l2 + step + "px";
	home.style.left = mazeWidth + step + "px";

	//style & append
	let els = [lb1, lb2, rb1, rb2];
	for (let i = 0; i < els.length; i++) {
		confSideEl(els[i]);
		maze.appendChild(els[i]);
	}
}

function confSideEl(el) {
	el.setAttribute("class", "barrier");
	el.style.width = bwidth + "px";
}

//gen maze using Recursive Backtracking
function genMaze(cx, cy, s) {
	// shuffle unchecked directions
	let d = limShuffle(dirs, s);

	for (let i = 0; i < d.length; i++) {
		let nx = cx + modDir[d[i]].x;
		let ny = cy + modDir[d[i]].y;
		grid[cy][cx].v = 1;

		if (nx >= 0 && nx < mx && ny >= 0 && ny < my && grid[ny][nx].v === 0) {
			grid[cy][cx][d[i]] = 1;
			grid[ny][nx][modDir[d[i]].o] = 1;
			//avoid shuffling d if d's not exhausted.. hence the i
			genMaze(nx, ny, i);
		}
	}
}

//draw maze
function drawMaze() {
	for (let x = 0; x < mx; x++) {
		for (let y = 0; y < my; y++) {
			let l = grid[y][x].l;
			let r = grid[y][x].r;
			let u = grid[y][x].u;
			let d = grid[y][x].d;

			drawLines(x, y, l, r, u, d);
		}
	}
}

//draw the actual lines
function drawLines(x, y, l, r, u, d) {
	let top = (y + 1) * step;
	let left = (x + 1) * step;
	if (l === 0 && x > 0) {
		let el = document.createElement("div");
		el.style.left = left + "px";
		el.style.height = step + "px";
		el.style.top = top + "px";
		el.setAttribute("class", "barrier");
		el.style.width = bwidth + "px";
		maze.appendChild(el);
	}

	if (d === 0 && y < my - 1) {
		let el = document.createElement("div");
		el.style.left = left + "px";
		el.style.height = bwidth + "px";
		el.style.top = top + step + "px";
		el.setAttribute("class", "barrier");
		el.style.width = step + bwidth + "px";
		maze.appendChild(el);
	}
}

function limShuffle(array, s) {
	let con = array.slice(0, s);
	let ran = array.slice(s, array.length);

	for (let i = ran.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		//console.log(i, j);
		[ran[i], ran[j]] = [ran[j], ran[i]];
	}
	let comb = con.concat(ran);
	return comb;
}

function animKeys(key) {
	if (key.id === "bu") {
		key.style.border = "3px #fff solid";
		key.style.borderTop = "1px #fff solid";
		key.style.borderBottom = "4px #fff solid";
		key.style.transform = "translateY(-2px)";
	}
	if (key.id === "bd") {
		key.style.border = "3px #fff solid";
		key.style.borderBottom = "1px #fff solid";
		key.style.borderTop = "4px #fff solid";
		key.style.transform = "translateY(2px)";
	}
	if (key.id === "bl") {
		key.style.border = "3px #fff solid";
		key.style.borderLeft = "1px #fff solid";
		key.style.borderRight = "4px #fff solid";
		key.style.transform = "translateX(-2px)";
	}
	if (key.id === "br") {
		key.style.border = "3px #fff solid";
		key.style.borderRight = "1px #fff solid";
		key.style.borderLeft = "4px #fff solid";
		key.style.transform = "translateX(2px)";
	}

	//reset
	setTimeout(() => {
		key.style.border = "2px #fff solid";
		key.style.borderTop = "2px #fff solid";
		key.style.borderBottom = "2px #fff solid";
		key.style.borderLeft = "2px #fff solid";
		key.style.borderRight = "2px #fff solid";
		key.style.transform = "translateY(0px)";
		key.style.transform = "translateX(0px)";
	}, "150");
}

let maxl = 0;
let prevl = 0;
function updateEmo(lr) {
	//simple/manual emo-adjustment - old
	if (lr) {
		if (
			thingie.offsetLeft > mazeWidth - step &&
			thingie.offsetTop === home.offsetTop
		) {
			emo.innerHTML = "💓";
			home.innerHTML = "🏠";
		}
		if (thingie.offsetLeft > mazeWidth) {
			emo.innerHTML = "";
			home.innerHTML = "💖";

			document.getElementsByClassName("popup1")[0].classList.add("active");

		}
		prevl = thingie.offsetLeft;
	} else {
		if (thingie.offsetLeft > (mazeWidth - step) && thingie.offsetTop === home.offsetTop) {
			emo.innerHTML = "💓";
		}else{
			if(thingie.offsetLeft > (mazeWidth - step) && thingie.offsetTop != home.offsetTo){
				emo.innerHTML = "❤️";
			}
		}
	}
}


// modal work for game win
document.getElementById("dismiss-popup-btn1").addEventListener("click",function(){
  document.getElementsByClassName("popup1")[0].classList.remove("active");

});
// modal work ends


// modal work for page menu
document.getElementById("plus3").style.cursor = "pointer";

document.getElementById("plus3").addEventListener("click",function(){
  document.getElementsByClassName("popup2")[0].classList.add("active");
});
 
document.getElementById("dismiss-popup-btn2").addEventListener("click",function(){
  document.getElementsByClassName("popup2")[0].classList.remove("active");
});
// modal work ends




// post it style logic
const link = document.querySelector(".details");

link.onmouseenter = () => {
var r1 = document.querySelector(':root');

//   sunset variation
  r1.style.setProperty('--red1', '#fce38a');
  r1.style.setProperty('--darkPink1', '#fc8181');
  r1.style.setProperty('--pink1', '#ff8080');

// default variation
r1.style.setProperty('--red1', 'white');
r1.style.setProperty('--darkPink1', 'aquamarine');
r1.style.setProperty('--pink1', 'mediumpurple');

  r1.style.setProperty('--fourDefaultBg', 'white')
  r1.style.setProperty('--pss', '4.5rem')

}

link.onmouseleave = onMouseLeave = () => {
  var r1 = document.querySelector(':root');

  r1.style.setProperty('--red1', 'white');
  r1.style.setProperty('--darkPink1', 'white');
  r1.style.setProperty('--pink1', 'white');
  r1.style.setProperty('--fourDefaultBg', '#393631')
  r1.style.setProperty('--pss', '4rem')

}


link.onmousedown = () => {
	var r1 = document.querySelector(':root');

	r1.style.setProperty('--red1', 'white');
	r1.style.setProperty('--darkPink1', 'white');
	r1.style.setProperty('--pink1', 'white');
	r1.style.setProperty('--fourDefaultBg', '#393631')
	r1.style.setProperty('--pss', '4rem')
  
  }



//   menu opener style logic
const pls = document.querySelector("h5");

pls.onmousedown = () => {
	var r2 = document.querySelector(':root');

  	r2.style.setProperty('--col', 'lightgray');

}

pls.onmouseup = () => {
	var r2 = document.querySelector(':root');
	
	r2.style.setProperty('--col', 'white');

}


pls.onmouseenter = () => {
	var r2 = document.querySelector(':root');

	r2.style.setProperty('--sz', '6rem');
		
}

pls.onmouseleave = () => {
	var r2 = document.querySelector(':root');
	
	r2.style.setProperty('--sz', '5rem');
	
}