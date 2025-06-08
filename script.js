var load = document.getElementById("load");
window.addEventListener("load", function(){
    setTimeout(function(){
        load.style.display = "none";
    },1000)
})

window.addEventListener("load", function(){
   setTimeout(function(){
       document.getElementById("load-landing").style.display = "none";
   },4000)
})
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


// COUNTDOWN
// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Jul 3, 2025 12:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours,orithm to ca seconds and minutes
    // Alglculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  } else {
   document.querySelector('.countdown').textContent = "Now LIVE !";
  }
}

//POPUP
function togglePopup1(){
   document.getElementById("popup-1").classList.toggle("active");
}
function togglePopup3(){
   document.getElementById("popup-3").classList.toggle("active");
}
function togglePopup2(){
   document.getElementById("popup-2").classList.toggle("active");
}
function togglePopup4(){
   document.getElementById("popup-4").classList.toggle("active");
}
function togglePopup5(){
   document.getElementById("popup-5").classList.toggle("active");
}
function togglePopup6(){
   document.getElementById("popup-6").classList.toggle("active");
}
function togglePopup7(){
   document.getElementById("popup-7").classList.toggle("active");
}
function togglePopup8(){
   document.getElementById("popup-8").classList.toggle("active");
}
function togglePopup9(){
   document.getElementById("popup-9").classList.toggle("active");
}
function togglePopup10(){
   document.getElementById("popup-10").classList.toggle("active");
}
function togglePopup11(){
   document.getElementById("popup-11").classList.toggle("active");
}
function togglePopup12(){
   document.getElementById("popup-12").classList.toggle("active");
}
function togglePopup13(){
   document.getElementById("popup-13").classList.toggle("active");
}
function togglePopup14(){
   document.getElementById("popup-14").classList.toggle("active");
}
function togglePopup15(){
   document.getElementById("popup-15").classList.toggle("active");
}
function togglePopup16(){
   document.getElementById("popup-16").classList.toggle("active");
}
function togglePopup17(){
   document.getElementById("popup-17").classList.toggle("active");
}
function togglePopup18(){
   document.getElementById("popup-18").classList.toggle("active");
}
function togglePopup19(){
   document.getElementById("popup-19").classList.toggle("active");
}
function togglePopup20(){
   document.getElementById("popup-20").classList.toggle("active");
}
function togglePopup21(){
   document.getElementById("popup-21").classList.toggle("active");
}
function togglePopup22(){
   document.getElementById("popup-22").classList.toggle("active");
}

const nav = document.querySelector('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                nav.classList.add('active_nav');
            } else {
                nav.classList.remove('active_nav');
            }
        })
