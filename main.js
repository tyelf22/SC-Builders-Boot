/* HEADER  */
console.log('connected')
let navBtn = document.querySelector(".checkBtn")
let navBtnTwo = document.querySelector(".checkBtnTwo")
let contactBtn = document.querySelector(".contactBtn")

let links = document.querySelector(".navLinks")

//resizing window determines nav items to display
window.addEventListener('resize', function(event){
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 950) {
        console.log('Wide viewport');
        navBtn.style.display = 'none'
        navBtnTwo.style.display = 'none'
    } else {
        navBtn.style.display = 'block'
        navBtnTwo.style.display = 'none'
        links.style.left = "-100%"
        contactBtn.style.left = "-100%"

    }
  });


navBtn.addEventListener('click', () => {
    console.log("clicked")
    navBtn.style.display = "none"
    navBtnTwo.style.display = "block"

    links.style.left = "0"
    contactBtn.style.left = "50%"
    
})

navBtnTwo.addEventListener('click', () => {
    console.log("clickedExit")
    navBtn.style.display = "block"
    navBtnTwo.style.display = "none"

    links.style.left = "-100%"
    contactBtn.style.left = "-100%"

})


document.getElementById("name").focus();


//NAV BAR

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }