var themeButtonEl = $('#theme-btn');
var isDark = true;

themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#4192ada2', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#4363b9' });
      isDark = !isDark;
    }
  });

  //when isDark = false, color doesnt change
  //when isDark = true, the else statement happens

  