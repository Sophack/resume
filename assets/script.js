var themeButtonEl = $('#theme-btn');
var isDark = false;
// var isLight = false;

//instead of event listener 
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});


// var rootEl = $('.skills-section');
// rootEl.append('<h2>did it work</h2>');

// var abilities = [
//   'Select',
//   'Create',
//   'Style',
//   'Animate',
//   'Traverse',
//   'Event Listen',
//   'much more',
// ];

// for (var i = 0; i < abilities.length; i++) {
//   // Create a new `<div>` for each ability and its text content
//   var abilityEl = $('<li>');

//   // abilityEl.textContent = abilities[i];
//   abilityEl.text(abilities[i]);

//   // `my-3` class adds margin on top and bottom
//   abilityEl.addClass('my-3');

//   // Alternatively
//   // var abilityEl = $("<div>" + abilities[i] + "</div>");

//   // Add this new `<div>` to the abilities `<div>` container element.
//   rootEl.append(abilityEl);
// };


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


  // refreshButtonEl.on('click', function () {
  //   if (isDark) {
  //     $('body').css({ 'background-color': '#1a1a1a', color: '#f7f7f7' });
  //     isDark = isDark;
  //   } else {
  //       location.reload();
  //     isDark = !isDark;
  //   }
  // });

  //when isDark = false, color doesnt change
  //when isDark = true, the else statement happens
  //var isDark = "true" is the light theme state

  