(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery

  //get the desktop menu itmes
  toggleBtn = document.querySelector('#toggleBtn')
  addBg = document.querySelectorAll('.addBg')

  //change the desktop menu items to have background on click
  toggleBtn.addEventListener('click', () => {
    addBg.forEach(bg => {
      bg.style.background = 'rgba(30,30,30, 0.85)'
    });

  })

  let toggle = false;

  //get the mobile menu itmes
  navToggle = document.querySelector('#nav-toggle')
  addMobileBackSingle = document.querySelector('.addMobileBack')
  addMobileBack = document.querySelectorAll('.addMobileBack')

  //change the mobile menu items to have background on click
  navToggle.addEventListener('click', () => {
    toggle = !toggle
    console.log('this is toggle ' + toggle)
    if(toggle){
      addMobileBack.forEach(bg => {
        bg.style.background = 'rgba(30,30,30, 0.85)'
      })
    }else {
      addMobileBack.forEach(bg => {
        setTimeout(() => {
          bg.style.background = 'none'
        }, 300)
      })
    }
  })
